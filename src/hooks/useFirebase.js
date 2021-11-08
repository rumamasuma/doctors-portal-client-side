import  { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signOut, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, updateProfile,getIdToken} from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError , setAuthError] = useState('');
const [admin, setAdmin] = useState(false);
const [token, setToken] = useState('');

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// user registration
const registerUser = (email, password,name, history) =>{
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   setAuthError('');
   const newUser = {email, displayName : name};
   setUser(newUser);
  //  send user to the database
  saveUser(email, name ,'POST');
  //  send name to firebase after creation
  updateProfile(auth.currentUser, {
    displayName:name 
  }).then(() => {
    
  }).catch((error) => {
   
  });
   history.replace('/');
  })
  .catch((error) => {
  setAuthError( error.message);
   
  })
  .finally (()=> setIsLoading(false));
}

// user login
const loginUser = (email,password, location , history)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const userDestination = location?.state?.from || '/';
    history.replace(userDestination);
        setAuthError('');
  })
  .catch((error) => {
    setAuthError( error.message);
  })
  .finally (()=> setIsLoading(false));
}

// sign in using google
const signInUsingGoogle =(location,history) =>{
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
     setAuthError('');
     const userDestination = location?.state?.from || '/';
     history.replace(userDestination);
  }).catch((error) => {
    setAuthError( error.message);
  })
   .finally (()=> setIsLoading(false));

}
// observe user state change or not
useEffect(() =>{
 const unsubscribed  = onAuthStateChanged(auth, (user) => {
        if (user) {       
          setUser(user);
          getIdToken(user)
          .then(idToken =>{
            setToken(idToken);
          })
        } else {
         setUser({})
        }
        setIsLoading(false);
      });
     return () => unsubscribed; 
},[auth])

//  make admin data load
useEffect(()=>{
fetch(`https://fast-harbor-80388.herokuapp.com/users/${user.email}`)
.then(res =>res.json())
.then(data => setAdmin(data.admin))
},[user.email])

// user log out
const logOut = () =>{
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally (()=> setIsLoading(false));
}
// save user to database
const saveUser = (email, displayName, method)=>{
const user = {email, displayName};
fetch('https://fast-harbor-80388.herokuapp.com/users' , {
  method : method,
  headers: {
    'content-type' : 'application/json'
  },
  body : JSON.stringify(user)
})
.then()
}

    return {
        user, admin ,registerUser, logOut ,loginUser ,isLoading, authError,signInUsingGoogle , token
    }
};

export default useFirebase;