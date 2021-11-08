import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import treatment from '../../../images/treatment.png';
import  {Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Treatment = () => {
    return (
       <Container >
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{mt:4}} >
        <Grid item xs={12} md={6}>
          <img style ={{width :'400px' }}    src={treatment}   alt="" />
        </Grid>
        <Grid item xs={12} md={6} style={{textAlign :'left', display :'flex', justifyContent : 'center', alignItems : 'center'}}  >
     <Box>
     <Typography variant ="h4" style={{fontWeight : 600 }} sx={{mb: 3}}>
      Exceptional Dental Care <br/> On Your  Terms
         </Typography>
         <Typography variant ="h6" sx={{mb: 3}} style={{color :'gray' , fontWeight : 300 ,fontSize : 13}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officiis? Sapiente illo officiis odit dolorem sunt libero, incidunt, ut impedit iure aperiam ab quia quasi culpa dolor quae veritatis ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officiis? Sapiente illo officiis odit dolorem sunt libero, incidunt, ut impedit iure aperiam ab quia quasi culpa dolor quae veritatis ex.
           </Typography>
           <Button variant="contained" style ={{backgroundColor :'#1FE2D3'}}>Learn More</Button>
     </Box>
        </Grid>
      </Grid>
    </Box>
       </Container>
    );
};

export default Treatment;