import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Background from './BackgroundSection';
import Home from './Home';
import Lesson from './Lesson';
import BuyLease from './buylease';
import HorseInfo from'./HorseInfo';
import {DataProvider} from './DataContext';
import LessonInfo from './LessonInfo';
import ContactUs from './contactus';
import RentStable from './rentstable';
import RentStableA from './rentstable-A';
import PaymentScreen from './paymentScreen';
import StableConfirmation from './ConfirmationScreen';

function App() {
  return (
  <Router>
  <DataProvider>
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Lesson" element={<Lesson />} />
            <Route path="/buylease" element={<BuyLease />} />
            <Route path="/HorseInfo" element={<HorseInfo />} />
            <Route path="/LessonInfo" element={<LessonInfo />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/RentStable" element={<RentStable />} />
            <Route path="/rentstable-A" element={<RentStableA />} />
            <Route path="/paymentScreen" element={<PaymentScreen />} />
            <Route path="/ConfirmationScreen" element={<StableConfirmation />} />
        </Routes>
      </div>
    </div>
    </DataProvider>
    </Router>
  );
}

export default App;
