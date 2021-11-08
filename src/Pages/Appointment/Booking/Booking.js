import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const { name , time, space} = booking;

    const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

    return (
      <>
       <Grid item xs={12} md={4} sm={6}>
       <Paper elevation={3} sx={{py : 5}} >
       <Typography variant="h5"  sx={{color :'#1FE2D3',fontWeight : 600}}  gutterBottom component="div">
         {name}
      </Typography>
       <Typography variant="h6" gutterBottom component="div">
         {time}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {space} Spaces Available
      </Typography>
      <Button onClick = {handleBookingOpen}   variant="contained"
       style ={{backgroundColor :'#1FE2D3'}}>Book Appointment</Button>
           </Paper>
        </Grid>
      <BookingModal  
      booking = {booking}
      date={date}
      openBooking = {openBooking}
      handleBookingClose = {handleBookingClose}
      setBookingSuccess={setBookingSuccess}
      ></BookingModal>
</>
          
     
    );
};

export default Booking;