import courses from "../../api/data/coursesData";
import "../Courses/CoursePage.scss";
import nurse from "../../assets/Images/nurse.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import starImg from '../../assets/Images/star.png';  
import arrowIcon from "../../assets/Images/arrow.png";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function CoursesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams(); 
  const listRef = useRef(null);

 
  const activeTab = category || "Medical";

  const filteredCourses = courses.filter((course) => {
    if (activeTab === "Medical") return course.category === "Medical";
    if (activeTab === "Physiotherapy") return course.category === "Physiotherapy";
    if (activeTab === "Specialized") return course.category === "Specialized";
    return true;
  });

  useEffect(() => {
    if (location.state?.scrollTo === "courses-list") {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.state]);

  //  navigate to DetailPage with course data
  const handleCourseClick = (course) => {
    navigate("/detail", { state: { course } });
  };

  // update tab using params instead of state
  const handleTabChange = (tab) => {
    navigate(`/courses/${tab}`);
  };

  return (
    <>
    <div className="course-pg">
      <Navbar />

      <div className="courses-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Unlock Your Potential with <br />
              <span> Medical & Physiotherapy Courses</span>
            </h1>
            <p>
              Providing high-quality educational resources for medical <br /> and
              physiotherapy students, designed to help you <br />
              excel in your studies and future career. <br />
            </p>
            <button 
              className="explore-btn"
              onClick={() => listRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Courses
            </button>
          </div>
          <div className="hero-image">
            <img src={nurse} alt="Doctor" />
          </div>
        </section>

        {/* Search + Tabs */}
        <section className="filters">
          <input
            type="text"
            placeholder="    Search"
            className="search-box"
          />

          <div className="tabs">
            <button
              className={activeTab === "Medical" ? "active" : ""}
              onClick={() => handleTabChange("Medical")}
            >
              Medical Courses
            </button>

            <button
              className={activeTab === "Physiotherapy" ? "active" : ""}
              onClick={() => handleTabChange("Physiotherapy")}
            >
              Physiotherapy Courses
            </button>

            <button
              className={activeTab === "Specialized" ? "active" : ""}
              onClick={() => handleTabChange("Specialized")}
            >
              Specialized Courses
            </button>
          </div>

          <div className="sort">
            <label>Sort By:</label>
            <select>
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </section>
        <hr />

        {/* Courses List */}
        <section ref={listRef} className="courses-list">
          <h2>{activeTab} Courses</h2>
          <div className="grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                {/* Image + Arrow Button */}
                <div className="image-container">
                  <img src={course.image} alt={course.title} />
                  <button
                    className="arrow-btn"
                    onClick={() => handleCourseClick(course)}
                  >
                    <img src={arrowIcon} alt="View" />
                  </button>
                </div>

                {/* Course Info */}
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
        </section>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default CoursesPage;
