import React from 'react';
import './Education.css';

function Education() {
   // TODO: change education section to be two columns, icon of graduation and content as : place, time, title (look on google for examples)
   const educations = [
      {
         title: "PHP Developer",
         date: "From 2022 February to 2022 July",
         description: "A year and a half ago I changed my qualification to PHP Developer at the Baltic Institue of Technology"
      },
      {
         title: "Another Title",
         date: "Another Date",
         description: "Another Description"
      }
   ];

   return (
      <div className="content d-flex flex-column">
         {educations.map((education, index) => (
            <section key={index} className="container d-flex flex-column mb-4">
               <h2 className="container display-6 mb-4">{education.title}</h2>
               <p className="container date-string">{education.date}</p>
               <div className="container">{education.description}</div>
            </section>
         ))}
      </div>
   );
}

export default Education;