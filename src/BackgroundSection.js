import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundimg from './images/HomeBackground.jpeg';

function BackgroundImage(){
    const sectionStyle = {
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        marginTop: '10px'
    }
    const imgStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1'
    }
    const contentStyle = {
        position: 'relative',
         background: 'rgba(0, 0, 0, 0.5)',
         color: 'white',
         padding: '10px',
         zIndex: '1'
    }

    return(
        <div className="BackgroundImage" style={sectionStyle}>
            <img src= {backgroundimg} alt="Background image" style={imgStyle} />
            <div className="content" style={contentStyle}>
                <h2>WELCOME TO HALTON HILLS STABLE</h2>
                <a href="/lesson" class="btn btn-primary ms-auto">BOOK A LESSON</a>
                <a href="/rentstable" class="btn btn-primary ms-auto">RENT A STABLE</a>
                <a href="/buylease" class="btn btn-primary ms-auto">VIEW OUR HORSES</a>
            </div>
        </div>
    );

}

export default BackgroundImage