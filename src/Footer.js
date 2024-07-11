import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/Logo.jpeg';

function Footer(){
    return(
    <footer className="bg-dark text-white">
    <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4 text-center mb-3">
                    <img src={Logo} alt="Avatar Logo" style={{width: '250px'}} className="rounded" />
                </div>
                <div className="col-sm-4">
                    <h2>About Us</h2>
                    <p>Located in the beautiful Halton Hills, Halton Hill Stables offers top-notch horse care, state-of-the-art facilities, and professional training for all riders. Our dedicated team creates a safe, supportive, and welcoming environment. Join us to start your equestrian journey or enhance your riding skills.</p>
                </div>
                <div className="col-sm-4">
                    <h2>Contact Us</h2>
                    <p>14214 8 Line</p>
                    <p>Georgetown ON</p>
                    <p>L7G 4S4</p>
                    <p>Email: contact@haltonhillsstable.com</p>
                    <p>Phone: (905) 467-7890</p>
                </div>
            </div>
        </div>
        <div className="text-center py-3">
            <p> 2024 Amplify Entertainment. All rights reserved.</p>
        </div>
        </footer>
    );

}

export default Footer