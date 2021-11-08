import React ,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
 const [email, setEmail] = useState('');
 const [success, setSuccess] = useState(false);
 const {token} = useAuth();

const handleOnBlur = e =>{
    setEmail(e.target.value);
}
    const handleAdminSubmit = e =>{
        const user = {email};
      fetch('https://fast-harbor-80388.herokuapp.com/users/admin', {
          method: 'PUT',
          headers : {
              'authorization' : `Bearer ${token}`,
              'content-type' : 'application/json'
          },
          body : JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
          if(data.modifiedCount){
            console.log(data);
            setSuccess(true);
          }
        
      })

    e.preventDefault();
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit= {handleAdminSubmit}>
            <TextField  sx={{mb:3, width :'50%'}}
            label="Email" type="email" onBlur={handleOnBlur}
             variant="standard" />
               <br/>
            <Button type="submit" variant="contained"
       >Make Admin</Button>
            </form>
         { success &&  <Alert severity="success">Made Admin Successfully !</Alert>}
        </div>
    );
};

export default MakeAdmin;