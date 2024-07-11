import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

function LessonCard( {lesson} ){
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setData(lesson);
    navigate('/LessonInfo');
  };

    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={lesson.img} alt="Card image cap" />
            <div className = "card-body">
                <h5 className="card-title">{lesson.name}</h5>
                <p className="card-description">{lesson.description}</p>
                <a href="/" className="btn btn-primary">Book</a>
                <button className="btn btn-primary" onClick={handleSubmit}>More Info</button>
            </div>
        </div>
    );
}
export default LessonCard