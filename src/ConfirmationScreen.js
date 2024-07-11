import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function StableConfirmation(){

    const location = useLocation();
    const {numHorses, Duration, startDate, Firstname, Lastname, Emailaddress, phoneNumber, Breed, dob, PaymentName, CardNumber, CardCVC} = location.state || {};

    return(
    <div>
        <main className="container mt-5">
            <div className="mn-4">
                <h2>Renting Confirmation</h2>
                <h3>First Name</h3>
                <p>{Firstname}</p>
                <h3>Last Name</h3>
                <p>{Lastname}</p>
                <h3>Date</h3>
                <p>{startDate}</p>
                <h3>Duration</h3>
                <p>{Duration}</p>
            </div>
        </main>
        <Footer />
    </div>
    );

}
export default StableConfirmation