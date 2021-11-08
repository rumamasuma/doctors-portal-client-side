import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink ,useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';



const Login = () => {

const [loginData, setLoginData] = useState({});
const {user,loginUser, signInUsingGoogle ,isLoading, authError} = useAuth();

// redirects 
const location = useLocation();
const history = useHistory();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);
        const newLoginData= {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

const handleLoginSubmit = e =>{

 loginUser(loginData.email, loginData.password, location, history);
  
    e.preventDefault();
}
// google sign in 
const handleGoogleSignIn =() =>{
   signInUsingGoogle(location, history)
}
    return (
     <Container>
 <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
      Login
      </Typography>
      <form onSubmit = {handleLoginSubmit}>
  
      <TextField id="standard-basic" 
          sx={{width :'75%', m:1}}
      label="Your Email" 
      name ='email'
      type='email'
      onChange ={handleOnChange}
      variant="standard" />
         <TextField
         sx={{width :'75%', m:1}}
          id="standard-password-input"
          label=" Your Password"
          name='password'
          onChange={handleOnChange}
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
         <Button variant="contained"   sx={{width :'75%', m:1}}
        type="submit"
        style ={{backgroundColor :'#1FE2D3'}}>Login </Button>
        <NavLink to ='/register'>
        <Button variant="text">New User ? Please Register</Button>
        </NavLink>
                  {/* spinner  */}
                  {isLoading && <CircularProgress color="secondary" />}

            {/* alert msg */}
{ user?.email &&   <Alert severity="success">
User Login Successfully !
</Alert>
}

{/* error msg */}
{ authError &&  <Alert severity="error">{authError}</Alert> }

<p >You can sign in using Google</p>
<Button onClick={handleGoogleSignIn}     variant="contained"   sx={{width :'75%', m:1}}
        type="submit"
        style ={{backgroundColor :'#1FE2D3'}}>Google Sign In </Button>
      </form>

        </Grid>
        <Grid item xs={12} md={6}>
        <img   style ={{width : '100%'}}     src={login} alt="" />
        </Grid>
      
      </Grid>
     </Container>
    );
};

export default Login;