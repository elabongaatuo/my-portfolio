import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {
  const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? 
          "qualification__button qualification__active button--flex" : 
          "qualification__button button--flex"}
          onClick={() => toggleTab(1)}>

          <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? 
          "qualification__button qualification__active button--flex" : 
          "qualification__button button--flex"}
          onClick={() => toggleTab(2)}>
          <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
        <div className={toggleState === 1 ?
        "qualification__content qualification__content-active" : 
        "qualification__content"}>
          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Google Data Analytics Certificate</h3>
                <span className="qualification__subtitle"> Coursera</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bsc. Electrical and Electronic Engineering</h3>
                <span className="qualification__subtitle">JKUAT</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2021
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

        <div className={toggleState === 2 ?
        "qualification__content qualification__content-active" : 
        "qualification__content"}>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Operations Manager</h3>
                <span className="qualification__subtitle">Nywele Nyumbani Ltd</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 -Present
                </div>
              </div>
              <div>
                <h3 className="qualification__title">Technical Mentor</h3>
                <span className="qualification__subtitle">Safaricom Technovation Challenge</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications