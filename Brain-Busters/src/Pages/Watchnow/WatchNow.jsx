import React from "react";
import "./WatchNow.scss";
import Course from "../../Components/coursesCards/Course.jsx";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";

function WatchNow() {
  const location = useLocation();
  const course = location.state?.course; //  course passed from DetailPage

  return (
    <>
    <div className="watch">
      <Navbar />
      <section className="section-1">
        <div className="video">
          {/* ✅ show selectedCourse.image instead of static watchimg */}
          <img src={course?.img} alt="video.." />
        </div>
        <div className="Bold-word">
          <h1>{course?.title || "Course Title"}</h1>
        </div>
        <div className="p-word">
          <p>{course?.description || "Default description here..."}</p>
        </div>
      </section>
      <Course />
      <Footer />
      </div>
    </>
  );
}

export default WatchNow;
