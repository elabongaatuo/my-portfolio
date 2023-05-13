import React from 'react';
import "./skills.css";
import DataAnalysis from './DataAnalysis';
import FrontEnd from './FrontEnd';

const Skills = () => {
  return (
   <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Tech Stack</span>
        <div className="skills__container container grid">
        <FrontEnd/>
        <DataAnalysis/>
        </div>
   </section>
  )
}

export default Skills