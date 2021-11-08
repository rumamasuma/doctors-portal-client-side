import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SingleService from '../SingleService/SingleService';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services=[
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]



const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
       <Container>
       <Typography sx={{ fontWeight: 500 , m:2, color: 'secondary.main'}}  variant="h6" component="div">
      Our Services
        </Typography> 
       <Typography sx={{ fontWeight: 600,m:2 }}  variant="h4" component="div">
      Services We Provide
        </Typography> 
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(singleService =>  <SingleService key={singleService.name}
                singleService={singleService}
            ></SingleService>)
        }
        </Grid>
       </Container>
      </Box>
    );
};

export default Services;