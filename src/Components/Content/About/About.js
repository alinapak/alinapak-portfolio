import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import './About.css';

function About() {
   const skillsRef = useRef(null);
   const experienceRef = useRef(null);
   const educationRef = useRef(null);
   const sectionRefs = [skillsRef, experienceRef, educationRef];
   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

   useEffect(() => {
      const handleScroll = (event) => {
         const direction = event.deltaY > 0 ? 'down' : 'up';
         scrollToSection(direction);
      };

      window.addEventListener('wheel', handleScroll);

      return () => {
         window.removeEventListener('wheel', handleScroll);
      };
   }, [currentSectionIndex]);

   const scrollToSection = (direction) => {
      let newIndex = currentSectionIndex;
      if (direction === 'down' && currentSectionIndex < sectionRefs.length - 1) {
         newIndex = currentSectionIndex + 1;
      } else if (direction === 'up' && currentSectionIndex > 0) {
         newIndex = currentSectionIndex - 1;
      }
      const section = sectionRefs[newIndex]?.current;
      if (section) {
         const { top } = section.getBoundingClientRect();
         const offset = window.scrollY + top - document.documentElement.clientTop;
         window.scrollTo({ top: offset, behavior: 'smooth' });
      } else {
         console.error('Section not found:', newIndex);
      }

      setCurrentSectionIndex(newIndex);
   };

   return (
      <motion.div className="about"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>
         <section ref={skillsRef} className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="content-container w-100 justify-content-center d-flex flex-column text-white">
               <h1 className="display-1">Skills</h1>
               <p className="display-6">Skills gained while working and learning web development</p>
               <div className="skills align-self-end w-100 text-white">
                  <span>HTML</span>
                  <div className="progress ">
                     <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>CSS/SCSS/SASS</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>JavaScript/TypeScript</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>Vue.js/Nuxt.js</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>PHP/Laravel</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>SQL/MySQL</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>React.js</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>Bootstrap</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>GIT</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
               </div>
            </div>
         </section>

         <section ref={experienceRef} className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="content-container w-100 justify-content-center d-flex flex-column text-white">
               <h1 className="display-1">Work Experience</h1>
               <p className="display-6">UAB "CherryTeam" (September 2022 - April 2024)</p>
               <p className="info">Business management app development using Vue.js and Nuxt.js frameworks, along with HTML, CSS/SCSS, JavaScript/TypeScript, SQL, and GIT.</p>
            </div>
         </section>

         <section ref={educationRef} className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="content-container w-100 justify-content-center d-flex flex-column text-white">
               <h1 className="display-1">Education</h1>
               <p className="display-6">PHP Developer | Baltic Institute of Technology on 2022</p>
               <p className="display-6">Psychology | KU (Klaipeda University) on 2014</p>
            </div>
         </section>
      </motion.div>
   );
}

export default About;
