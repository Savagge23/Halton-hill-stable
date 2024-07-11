import { useContext } from 'react';
import { DataContext } from './DataContext';
import sample from './videos/sample_video.mp4';
import Footer from './Footer';

function LessonInfo() {
  const { data: lesson } = useContext(DataContext);

  if (!lesson) {
    return <p>No lesson selected.</p>;
  }

  return (
  <div>
    <div className="container mt-5">
      <h1>{lesson.name}</h1>
      <img src={lesson.img} alt={lesson.name} className="img-fluid mb-4" />
      <p>{lesson.description}</p>
      <p><strong>Lesson Type:</strong> {lesson.lessontype}</p>
      <p><strong>Price:</strong> ${lesson.price}</p>
      <p><strong>Lesson Difficulty:</strong> {lesson.difficulty}</p>
      <p><strong>Horse Requirements:</strong> {lesson.requiresHorse ? 'Yes' : 'No'} </p>
      <h1>Lesson Video</h1>
      <video width="800" controls>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
   <Footer />
   </div>
  );
}

export default LessonInfo