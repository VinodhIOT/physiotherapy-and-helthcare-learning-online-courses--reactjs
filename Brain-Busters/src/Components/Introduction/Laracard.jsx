import React from "react";
import lara from "../../assets/Images/lara.png";
import img from "../../assets/Images/quatation.png";
import "./Laracard.scss";
import user from "../../assets/Images/larauser.png";
function Laracard() {
  return (
    <>
      <div className="cards">
        <h1 className="tittle">What Our Students Say</h1>
        <div className="cards-content">
          <div className="card-img">
            <img src={lara} alt="users review" />
          </div>
          <div className="content">
            <img className="content-image" src={img} alt="none" />
            <h1>Lara</h1>
            <div>
              <h2 className="color">Lara,</h2>
              <p className="non-color">Final year student</p>
            </div>

            <p>
              I highly recommend Brain Busters to anyone looking to excel in
              their exams and clinical practice. The support from their team is
              exceptional, making the learning process smooth and enjoyable!
            </p>
          </div>
          <div className="larauser">
          <div>
            <p>Our<br/>Students</p>
            <img src={user} alt="user" />
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Laracard;
