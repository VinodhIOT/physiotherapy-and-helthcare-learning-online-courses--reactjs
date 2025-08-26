import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Detail.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


// icons
import modules from "../../assets/icons/modul.png";
import difficulty from "../../assets/icons/difficulty.png";
import sound from "../../assets/icons/sound.png";
import sub from "../../assets/icons/subtitle.png";
import time from "../../assets/icons/tym.png";
import certificate from "../../assets/icons/certificate.png";

// data
import courses from "../../api/data/coursesData";
import Course from "../../Components/coursesCards/Course.jsx";

function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // state for selected course
  const [selectedCourse, setSelectedCourse] = useState(
    location.state?.course || courses[0]
  );

  // scroll top when course changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCourse]);

  // navigate to WatchNow page
  const handleWatchNow = () => {
    navigate("/watchnow", { state: { course: selectedCourse } });
  };

  return (
    <>
    <div className="page">
      <Navbar />

      <div className="detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          Home / Courses / {selectedCourse.category} Courses /{" "}
          <span>{selectedCourse.title}</span>
        </div>

        {/* Course Card */}
        <div className="course-card">
          {/* Left Section */}
          <div className="card-image">
            <img src={selectedCourse.image} alt="Course" />

            <div className="instructor-info">
              <img
                src={selectedCourse.instructorImg}
                alt="Instructor"
                className="instructor-photo"
              />
              <div className="review-txt">
                <p>
                  A course by <strong>{selectedCourse.instructor}</strong>
                </p>
                <div className="reviews">
                  <span>1,500 Reviews</span>
                  <span className="stars">★★★★★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="card-details">
            <h2>{selectedCourse.title}</h2>

            <div className="modules-difficulty">
              <span className="modules">
                <img src={modules} alt="icon" />
                Modules <br />
                <strong>{selectedCourse.modules || 15}</strong>
              </span>

              <span className="difficulty">
                <img src={difficulty} alt="icon" />
                Difficulty <br />
                <strong>{selectedCourse.difficulty || "Moderate"}</strong>
              </span>
            </div>

            {/* Info List */}
            <div className="info-list">
              <div>
                <img src={sound} alt="icon" />
                <span>Language: English</span>
              </div>

              <div>
                <img src={sub} alt="icon" />
                <span>
                  Subtitles: Available in English, Spanish, French, German
                </span>
              </div>

              <div>
                <img src={time} alt="icon" />
                <span>Duration: {selectedCourse.duration}</span>
              </div>

              <div>
                <img src={certificate} alt="icon" />
                <span>Certificate: Awarded upon completion</span>
              </div>
            </div>

            {/* Watch Now Button */}
            <button className="watch-btn" onClick={handleWatchNow}>
              Watch Now
            </button>
          </div>
        </div>

        {/* Course Description */}
        <div className="txt-container">
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
        </div>
      </div>

      {/* Courses section (pass handler) */}
      {/* <Course onSelectCourse={setSelectedCourse} isInsideDetails={true} /> */}
      <Course onSelectCourse={setSelectedCourse} isInsideDetails={true}/>

      <Footer />
      </div>
    </>
  );
}

export default DetailPage;
