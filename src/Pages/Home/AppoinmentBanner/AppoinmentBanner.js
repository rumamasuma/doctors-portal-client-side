import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Button from '@mui/material/Button';

const appointmentBanner = {
    background : `url(${bg})`,
    backgroundColor : 'rgba( 45, 59, 64, 0.9 )',
    backgroundBlendMode : 'darken, luminosity',
    marginTop : 175
}
   const AppoinmentBanner = () => {
    return (
        <Box  style={appointmentBanner}   sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           <img style ={{width : 400, marginTop :'-120px'}}
           src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex' ,justifyContent: 'center', textAlign : 'left',alignItems: 'center'}}>
         <Box>
         <Typography variant ="h6" sx={{mb: 5}} style ={{color :'#1FE2D3'}}>
                 Appointment
           </Typography>
           <Typography variant ="h4"  style={{color :'white'  , m:2}}>
              Make an   Appointment Today
           </Typography>
           <Typography variant ="h6" sx={{my: 5}} style={{color :'white' , fontWeight : 300 ,fontSize : 14, m:2}}>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas tempore ex dolore, accusantium aliquid, cumque perferendis, veritatis saepe unde ut quisquam praesentium et quo? Culpa reiciendis fugit dolorum veniam nulla.
           </Typography>
           <Button variant="contained" style ={{backgroundColor :'#1FE2D3'}}>Learn More</Button>
         </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;