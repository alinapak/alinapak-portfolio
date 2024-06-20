import './Projects.css';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";


function Projects() {
   const [activeIndex, setActiveIndex] = useState(0);
   let activeLink = ''
   const videoRefs = useRef([]);

   const carouselItems = useMemo(() =>
      [{ type: 'video', src: './videos/responsive-design-page.mp4', title: 'Design imitation project', description: 'This project aims to imitate a specific design with responsive capabilities using Vue and Nuxt setup. Styling was implemented with raw CSS.', href: 'https://github.com/alinapak/ThirdTaskDesignPage' },
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App', description: 'Simple CRUD app, created with React.js, and browser localstorage is used for data save.', href: "https://alinapak.github.io/shoppingListApp2/" },
      { type: 'video', src: './videos/figma-design-app.mp4', title: 'Figma design FE project', description: 'A purpose of this project was to recreate a page, designed by Figma, with HTML, raw CSS and Jawascript.', href: 'https://github.com/alinapak/Friday-Chalenge' },
      { type: 'video', src: './videos/restaurantApp.mp4', title: 'Restaurant Management App', description: 'The Restaurant-Menu-Dish App was developed as a final assignment at Baltic Institute of Technology. It features a backend API built with Laravel for CRUD operations restricted to admins, alongside a React.js frontend providing read-only functionality for all users.', href: 'https://github.com/alinapak/RestaurantExam' },
      { type: 'video', src: './videos/theme-toggle-button.mp4', title: 'Theme toggle button', description: 'It is a button designed to switch the theme of a page. The project achieves this using raw HTML for structure, JavaScript for functionality, and SCSS for responsive styling of the button\'s circular switch.', href: 'https://github.com/alinapak/TaskNumberOne' },
      { type: 'video', src: './videos/ORM-app.mp4', title: 'Personnel Management App', description: 'This PHP project utilizes raw CSS and the PHP Composer library. It incorporates ORM Doctrine for managing database schemas with 1 relationships (1:M), displaying table data and their relations in the browser, implementing CRUD functionalities for employees and projects, and allowing assignment of employees to projects,.', href: 'https://github.com/alinapak/personnelManComposer' },
      { type: 'video', src: './videos/file-browser.mp4', title: 'PHP File Browser App', description: 'This project was created for educational purposes and includes features such as directory and file browsing, folder navigation, directory creation, file deletion, file uploading and downloading, and login authentication using raw CSS and PHP.', href: 'https://github.com/alinapak/fileNav' },
      { type: 'video', src: './videos/vue-form.mp4', title: 'Vue Form App', description: 'Simple CRUD app, created with Vue.js, all data is stored in browser localstorage for saving purposes.', href: "https://github.com/alinapak/VueFormPinia" },
      ]);
   // const handleIndicatorClick = (index) => {
   //    setActiveIndex(index);
   // };
   const handleDivClick = (href) => {
      window.open(href, '_blank');
   };
   const handlePrevClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
   };

   const handleNextClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
   };
   activeLink = carouselItems[activeIndex].title
   useEffect(() => {
      const handleMouseEnter = (video) => {
         video.playbackRate = 2.0;
         video.play();
      };
      const handleMouseLeave = (video) => {
         video.pause();
      };

      videoRefs.current.forEach((video) => {
         video.addEventListener('mouseenter', () => handleMouseEnter(video));
         video.addEventListener('mouseleave', () => handleMouseLeave(video));
      });

      // Cleanup event listeners on component unmount
      return () => {
         videoRefs.current.forEach((video) => {
            video?.removeEventListener('mouseenter', () => handleMouseEnter(video));
            video?.removeEventListener('mouseleave', () => handleMouseLeave(video));
         });
      };
   }, [carouselItems]);
   return (
      <div className="projects">
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="img-container">
            </div>
            <div className="d-flex flex-column text-center text-white flex-grow-1">
               <h1 className="display-1">
                  Projects
               </h1>
            </div>
            <div className="align-self-end bubble-content ms-auto"><p>
               Here are a few projects, developed by me while learning web development
            </p></div>
         </section>
         {/* TODO: fix style, add title in bubble with link as video title */}
         {/* <section className="pt-2 container d-flex align-items-center flex-wrap gap-5">
            <div className="align-self-start bubble-content"><div className="skills nav d-block">
               <span>Check out my app! Click the link below:</span>
               <Link className="nav-link" to="https://alinapak.github.io/shoppingListApp2/" target="_blank" rel="noreferrer" >
                  {activeLink}
               </Link >
            </div></div>
            <div id="carouselExampleIndicators" className="carousel slide w-50 align-self-end flex-grow-1" data-ride="carousel">
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
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section> */}
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-5">
            {carouselItems.map((item, index) => (
               <div key={index} className="mt-5 card w-75 mx-auto">
                  <div className="card-body p-5">
                     <h2 className="card-title">{item.title}</h2>
                     <p className="card-text">{item.description}</p>
                     <div
                        onClick={() => handleDivClick(item.href)} className="btn external-link">
                        <i className="bi bi-box-arrow-up-right"></i><Link>Visit website</Link>
                     </div>
                  </div>
                  <video ref={(el) => videoRefs.current[index] = el}
                     muted controls className="card-img-bottom p-5" src={item.src} type={item.type}
                  ></video>
               </div>
            ))}
         </section>
      </div>
   );
}

export default Projects;