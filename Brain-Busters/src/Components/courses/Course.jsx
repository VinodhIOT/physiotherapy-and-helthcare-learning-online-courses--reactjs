import arrowIcon from "../../assets/Images/arrow.png";
import starImg from "../../assets/Images/star.png";
import courses from "../../api/data/coursesData";
import "./Course.scss";
import { useNavigate } from "react-router-dom";

function Course({ onSelectCourse, isInsideDetails = false }) {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    if (isInsideDetails) {
      
      onSelectCourse && onSelectCourse(course);
    } else {
      
      navigate("/detail", { state: { course } });
    }
  };

  return (
    <div className="courses-list">
      <div className="grid">
        {courses.slice(0, 4).map((course) => (
          <div key={course.id} className="course-card">
            <div className="image-container">
              <img src={course.image} alt={course.title} />
              <button
                className="arrow-btn"
                onClick={() => handleCourseClick(course)}
              >
                <img src={arrowIcon} alt="View" />
              </button>
            </div>
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <div className="cards">
              <div>
                <p>Price: {course.price}</p>
              </div>
              <div className="rating">
                <img src={starImg} alt="rating" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
