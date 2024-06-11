import './Projects.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Projects() {
   const [activeIndex, setActiveIndex] = useState(0);
   const carouselItems = [
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App' },
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App' },
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App' },
   ];
   // const handleIndicatorClick = (index) => {
   //    setActiveIndex(index);
   // };
   const handlePrevClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
   };

   const handleNextClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
   };
   return (
      <div className="projects">
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="align-self-start bubble-content ms-auto"><p>
               Here are a few projects, developed by me while learning web development
            </p></div>
            <div className="d-flex flex-column text-center text-white flex-grow-1">
               <h1 className="display-1">
                  Projects
               </h1>
            </div>
         </section>
         {/* TODO: fix style, add title in bubble with link as video title */}
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="align-self-end bubble-content ms-auto"><p>
               Here are a few projects, developed by me while learning web development
            </p></div>
            {/* <div className="align-self-end bubble-content ms-auto"><p>
            <Link className="nav-link" to="https://alinapak.github.io/shoppingListApp2/" target="_blank" rel="noreferrer" >
               Shopping List App
            </Link >
            <video width="600" controls>
               <source src="./videos/shopping-list.mp4" type="video/mp4" />
            </video>
         </p></div> */}
            <div id="carouselExampleIndicators" className="carousel slide w-50" data-ride="carousel">
               {/* <ol className="carousel-indicators">
               <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className={`${activeIndex === 0 ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(0)}
               ></li>
               <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className={`${activeIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(1)}
               ></li>
               <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className={`${activeIndex === 2 ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(2)}
               ></li>
            </ol> */}
               <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={handlePrevClick}>
                  <span onClick={handlePrevClick} className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onClick={handleNextClick}>
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </a>
               <div className="carousel-inner">
                  {carouselItems.map((item, index) => (
                     <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                        {item.type === 'video' ? (
                           <video className="d-block" controls>
                              <source src={item.src} type="video/mp4" />
                              Your browser does not support the video tag.
                           </video>
                        ) : (
                           <img className="d-block" src={item.src} alt={`Slide ${index + 1}`} />
                        )}
                        <div className="carousel-caption d-none d-md-block">
                           <p>{item.title}</p>
                           {/* <p>{`This is ${item.type === 'video' ? 'a video' : 'an image'} slide.`}</p> */}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

      </div>
   );
}

export default Projects;