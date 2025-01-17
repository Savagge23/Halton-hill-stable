import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './images/Logo.jpeg';

function NavBar(){
    return(
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Avatar Logo" style={{ width: '80px' }} className="rounded" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lesson">LESSONS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/RentStable">RENT A STABLE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/buylease">BUY/LEASE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div style={{margin: '105px'}}></div>
        </div>
    );
}

export default NavBar