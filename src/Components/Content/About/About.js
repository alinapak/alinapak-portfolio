import './About.css'

function About() {

   return (
      <div className="home">
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            {/* todo : bootstrap progress */}
            <div className="align-self-start me-auto bubble-content">
               <div className="skills">
                  <span>HTML</span>
                  <div className="progress ">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>
                  <span>CSS/SCSS/SASS</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>
                  <span>JavaScript/TypeScript</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>
                  <span>Vue.js/Nuxt.js</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                  <span>PHP/Laravel</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                  </div>
                  <span>SQL</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                  </div>
                  <span>React.js</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                  </div>
                  <span>Bootstrap</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                  </div>
                  <span>GIT</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                  </div>
               </div>
            </div>
            <div className="d-flex flex-column text-center text-white flex-grow-1">
               <h1 className="display-1">
                  Skills
               </h1>
            </div>
            <div className="align-self-end bubble-content ms-auto"><p>
               Skills gained while working and learning web development
            </p></div>
         </section>
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="align-self-start me-auto bubble-content"><p>
               From September 2022 to April 2024, I worked at UAB "CherryTeam," where, along with other developers, I developed a business management system app. We used Vue.js and Nuxt.js frameworks, along with HTML, CSS/SCSS, JavaScript/TypeScript, SQL, and Git.
            </p></div>
            <div className="d-flex flex-column text-center text-white flex-grow-1">
               <h1 className="display-1">
                  Work Experience
               </h1>
            </div>
            <div className="align-self-end bubble-content ms-auto"><p>
               I worked closely with both frontend and backend teams to ensure seamless integration and functionality. I am proficient in maintaining separate frontend and backend systems, creating APIs, and managing communication between the frontend and backend during development.
            </p></div>
         </section>
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="align-self-start me-auto bubble-content"><p>
               PHP Developer | Baltic Institute of Technology on 2022
            </p></div>
            <div className="d-flex flex-column text-center text-white flex-grow-1">
               <h1 className="display-1">
                  Education
               </h1>
            </div>
            <div className="align-self-end bubble-content ms-auto"><p>
               Psychology | KU (Klaipeda University) on 2014
            </p></div>
         </section>
      </div>
   )
}

export default About;