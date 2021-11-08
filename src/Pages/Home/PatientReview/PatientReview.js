import React from 'react';
import Container from '@mui/material/Container';
import  {Typography } from '@mui/material';
import { Grid } from '@mui/material';

const PatientReview = () => {
    return (
       <Container sx={{m:5}}>
<Grid sx={{textAlign :'left'}}>
<Typography variant ="h6" style ={{color :'#1FE2D3', fontWeight :600}}>
Testimonial
 </Typography>
 <Typography variant ="h4"  style ={{ fontWeight :500}}>
What's Our Patients Say
 </Typography>
</Grid>
       </Container>
    );
};

export default PatientReview;