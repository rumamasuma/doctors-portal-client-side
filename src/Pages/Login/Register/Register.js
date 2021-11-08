import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const Register = () => {
    const [loginData, setLoginData] = useState({});
   const history = useHistory();

const {user,registerUser ,isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData= {...loginData};
            // console.log(field,value , newLoginData);
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

const handleLoginSubmit = e =>{
    if(loginData.password !== loginData.password2){
        return;  
      }
      registerUser(loginData.email, loginData.password ,loginData.name, history);
    e.preventDefault();
}
    return (
        <Container>
        <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
               <Typography variant="body1" gutterBottom  sx={{ mt:3}}>
             Register For Appointment
             </Typography>
             { !isLoading &&
               <form onSubmit = {handleLoginSubmit}>
             <TextField id="standard-basic" 
                 sx={{width :'75%', m:1}}
             label="Your Name" 
             name ='name'
             type='text'
             onBlur ={handleOnBlur}
             variant="standard" />
             <TextField id="standard-basic" 
                 sx={{width :'75%', m:1}}
             label="Your Email" 
             name ='email'
             type='email'
             onBlur ={handleOnBlur}
             variant="standard" />
                <TextField
                sx={{width :'75%', m:1}}
                 id="standard-password-input"
                 label=" Your Password"
                 name='password'
                 onBlur={handleOnBlur}
                 type="password"
                 variant="standard"
               />
                <TextField
                sx={{width :'75%', m:1}}
                 id="standard-password-input"
                 label="Retype Your Password"
                 name='password2'
                 onBlur={handleOnBlur}
                 type="password"
                 variant="standard"
               />
           
               <Button variant="contained"   sx={{width :'75%', m:1}}
               type="submit"
               style ={{backgroundColor :'#1FE2D3'}}>Register </Button>
                   <NavLink to ='/login'>
               <Button variant="text">Already Registered ? Please Login </Button>
               </NavLink>
             </form>}

             {/* spinner  */}
             {isLoading && <CircularProgress color="secondary" />}

             {/* alert msg */}
             { user?.email &&   <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        User Registered Successfully !
      </Alert>
      }
      
      {/* error msg */}
      { authError &&  <Alert severity="error">{authError}</Alert> }

               </Grid>
               <Grid item xs={12} md={6}>
               <img   style ={{width : '100%'}}  src={login} alt="" />
               </Grid>
             
             </Grid>
            </Container>
    );
};

export default Register;