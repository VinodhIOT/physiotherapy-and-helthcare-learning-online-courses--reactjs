import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import contactnurse from "../../assets/Images/contactnurse.png";
import nurse from "../../assets/Images/home-nurse.png";
import userImg from "../../assets/Images/userimg.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Laracard from "../../Components/Introduction/Laracard";
import Course from "../../Components/Courses/Course";
import key1 from "../../assets/icons/key1.png";
import key2 from "../../assets/icons/key2.png";
import key3 from "../../assets/icons/key3.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="brain-busters">
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Path to Success in Medical <br /> and
            <span> Physiotherapy Careers</span>
          </h1>
          <p>
            Learn. Apply. Excel. Join our community of <br /> healthcare
            professionals and physiotherapists.
          </p>
          <div className="stats">
            <img src={userImg} alt="icon" /> <br />
            <p className="learners">
              {" "}
              <span>5000+</span> learners enrolled
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() =>
              navigate("/courses", { state: { scrollTo: "courses-list" } })
            }
          >
            Explore Our Courses
          </button>
        </div>
        <div className="hero-image">
          <img src={nurse} alt="Nurse" />
        </div>
      </section>

      {/* Introduction */}
      <section className="intro">
        <h2>Introduction</h2>
        <p>
          Welcome to Brain Busters, the ultimate learning hub for medical and
          physiotherapy students. <br /> Access expert-led courses, practical
          resources, and exam-focused content to excel in your studies <br />{" "}
          and professional exams. Enhance your knowledge, apply real-world
          skills, and join a community of <br /> dedicated learners on your
          journey to a successful healthcare career.
        </p>
      </section>

      {/* Key Features */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card yellow">
            <h3>
              Medical
              <br /> Mastery
            </h3>
            <p>
              Step into your clinical <br />
              career
              <br />
              with ease by mastering
              <br />
              essential medical concepts
              <br />
              and practical skills.
            </p>
          </div>
          <div className="feature-card green">
            <h3>
              Physiotherapy
              <br />
              Excellence
            </h3>
            <p>
              Learn the latest
              <br />
              physiotherapy techniques,
              <br />
              from rehabilitation
              <br />
              methods to patient care
              <br />
              protocols.
            </p>
          </div>
          <div className="feature-card blue">
            <h3>
              Exam
              <br />
              Preparation
            </h3>
            <p>
              Our resources will prepare
              <br />
              you with expert-designed
              <br />
              mock tests and clinical
              <br />
              practice questions.
            </p>
          </div>
        </div>
      </section>
      <section className="keys">
        <div className="key1">
          <img src={key1} alt="" />
        </div>
        <div className="key2">
          <img src={key2} alt="" />
        </div>
        <div className="key3">
          <img src={key3} alt="" />
        </div>
      </section>
      <div className="courses-list">
        <h2>Brain Busters Courses</h2>
      
      <Course />
      <button
          className="explore-btn"
          onClick={() =>
            navigate("/courses", { state: { scrollTo: "courses-list" } })
          }
        >
          <span>Explore All Courses</span>
        </button>
        </div>
      <Laracard />

      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-image">
            <img src={contactnurse} alt="Nurse" />
          </div>
          <div className="contact-form">
            <h2>Send Us Your Message</h2>
            <p>
              We’re happy to assist you! Share your query, and we’ll get back to
              you shortly.
            </p>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <hr className="line" />

      <Footer />
    </div>
  );
}

export default Home;
