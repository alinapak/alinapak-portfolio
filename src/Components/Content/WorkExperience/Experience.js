import React from 'react';
import './Experience.css';

function Experience() {

   // Define the content here
   const educations = [{
      title: "Web Developer",
      date: "From 2022 September to 2024 April",
      description: "Hello. I'm Alina, and I'm a web developer. In short, I graduated with a Bachelor's degree in Psychology in 2014. A year and a half ago, I transitioned to become a PHP Developer at the Baltic Institute of Technology, transforming into a 'freshly baked' web developer. Following my training, I promptly secured a position at a startup company, where I further honed my skills and expertise in web development."
   }

      ,
   {
      title: "Another Title",
      date: "Another Date",
      description: "Another Description"
   }

   ];

   return (<div className="content d-flex flex-column" > {
      educations.map((education, index) => (<section key={
         index
      }

         className="container d-flex flex-column mb-4" > <h2 className="container display-6 mb-4" > {
            education.title
         }

         </h2> <p className="container date-string" > {
            education.date
         }

         </p> <div className="container" > {
            education.description
         }

         </div> </section>))
   }

   </div>);
}

export default Experience;