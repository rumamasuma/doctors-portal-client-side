import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography, Container } from '@mui/material';
import Button from '@mui/material/Button';


const bannerBg = {
    background : `url(${bg})`,
  
}
const verticalCenter = {
    display : 'flex',
    alignItems : 'center',
    height : 400,
  
}
const Banner = () => {
  
    return (
        <Container  style= {bannerBg}  sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter ,textAlign : 'left'}} xs={12} md={6}>
      <Box>
      <Typography variant ="h3" sx={{mb: 5}}>
         Your New Smile <br/>
         Starts Here
           </Typography>
           <Typography variant ="h6" sx={{mb: 3}} style={{color :'gray' , fontWeight : 300 ,fontSize : 13}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officiis? Sapiente illo officiis odit dolorem sunt libero, incidunt, ut impedit iure aperiam ab quia quasi culpa dolor quae veritatis ex.
           </Typography>
           <Button variant="contained" style ={{backgroundColor :'#1FE2D3'}}>Get Appointment</Button>
      </Box>
          </Grid>
          <Grid item xs={12} md={6} style ={verticalCenter}>
           <img style ={{width :'400px'}} src={chair} alt="" />
          </Grid>    
        </Grid>
      </Container>
    );
};

export default Banner;