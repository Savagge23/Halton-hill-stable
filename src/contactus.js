import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'

function ContactUs(){
    return(
    <div>
    <main className="container mt-5">
                <div class="ratio ratio-16x9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.75565802918464!2d-79.99658351970267!3d43.70181795883075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b0c64c2942eef%3A0xf5778a7e00e93a1!2s14214%208%20Line%2C%20Georgetown%2C%20ON%20L7G%204S4!5e1!3m2!1sen!2sca!4v1720671946991!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
    </main>
    <main className="container mt-5">
        <div className="row">
                <div className="col-md-6">
                    <h2>ADDRESS</h2>
                    <p>14214 8th Line</p>
                    <p>Georgetown ON, L7G 4S4</p>
                </div>
                <div className="col-md-6">
                    <h2>Email</h2>
                    <p>contact@haltonhillsstable.ca</p>
                    <h2>Phone Number</h2>
                    <p>647-999-3333</p>
                </div>
        </div>
    </main>
    <Footer />
    </div>
    );
}
export default ContactUs
