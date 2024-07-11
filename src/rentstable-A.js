import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function RentStableA(){
    const location = useLocation();
    const {numHorses, Duration, startDate} = location.state || {};

    const [Firstname, setFirstName] = useState('');
    const [Lastname, setLastName] = useState('');
    const [Emailaddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Breed, setBreed] = useState('');
    const [dob, setdob] = useState('');
    const navigate = useNavigate();

    const rentstablea = (e) => {
        e.preventDefault();
        const data = {numHorses, Duration, startDate, Firstname, Lastname, Emailaddress, phoneNumber, Breed, dob};
        console.log(data);
        navigate("/paymentScreen");
    }

    return(
    <div>
    <main className="container mt-5">
        <form onSubmit ={rentstablea}>
            <div className="mn-4">
            <h2>Personal Details</h2>
            <label for="firstNameInputText" className="form-label">First Name:</label>
            <input type="text" className="form-control" id="firstNameInputText" placeholder="First Name" value = {Firstname} onChange={(e) => setFirstName(e.target.value)} />
            <label for="lastNameInputText" className="form-label">Last Name:</label>
            <input type="text" className="form-control" id="lastNameInputText" placeholder="Last Name" value = {Lastname} onChange={(e) => setLastName(e.target.value)} />
            <label for="emailAddressInputText" className="form-label">Email Address</label>
            <input type="text" className="form-control" id="emailaddressInputText" placeholder="xxxx@xxxxx.com" value= {Emailaddress} onChange={(e) => setEmailAddress(e.target.value)} />
            <label for="phoneNumberInputText" className="form-label">Phone Number:</label>
            <input type="text" className="form-control" id="phoneNumberInputText" placeholder="(xxx)-xxx-xxxx" value = {phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="mb-4">
            <h2>Horse Information</h2>
            <label for="breedInputText" className="form-label">Breed:</label>
            <input type="text" className="form-control" id="breedInputText" placeholder="Breed" value = {Breed} onChange={(e) => setBreed(e.target.value)} />
            <label for="dateInput" clasName="form-label">Date of Birth:</label>
            <input type="date" className="form-control" id="dateInput" value={dob} onChange={(e) => setdob(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    </main>
    <Footer />
    </div>



    );


}
export default RentStableA