import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointHeader from '../AppointHeader/AppointHeader';
import AvailableAppoint from '../AvailableAppoint/AvailableAppoint';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader date={date} setDate ={setDate}></AppointHeader>
            <AvailableAppoint date={date}></AvailableAppoint>
        </div>
    );
};

export default Appointment;