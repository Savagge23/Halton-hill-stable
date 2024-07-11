import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function RentStable(){
    const [Duration, setDuration] = useState('');
    const [numHorses, setnumHorses] = useState('');
    const [startDate, setStartDate] = useState('');
    const navigate = useNavigate();

    const rentstable = (e) => {
        e.preventDefault();
        const data = {numHorses, Duration, startDate};
        console.log(data);
            // Handle the form submission

        navigate("/rentstable-A", {state: data});
    }
    return(
    <div>
    <main className="container mt-5">
        <form onSubmit ={rentstable}>
            <div className ="mb-4">
                <label for="numberofHorses" className="form-label">Number of Horses:</label>
                <select className="form-select" id="numberofHorses" value={numHorses} onChange={(e) => setnumHorses(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <label for="durationofrent" className="form-label">Duration:</label>
                <select className="form-select" id="numberofHorses" value={Duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="1 Day">1 Day</option>
                    <option value="2 Day">2 Day</option>
                    <option value="3 Day">3 Day</option>
                    <option value="4 Day">4 Day</option>
                    <option value="5 Day">5 Day</option>
                    <option value="6 Day">6 Day</option>
                    <option value="7 Day">7 Day</option>
                </select>
                <label for="dateInput" clasName="form-label">Start Date:</label>
                <input type="date" className="form-control" id="dateInput" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    </main>
    <Footer />
    </div>
);
}

export default RentStable