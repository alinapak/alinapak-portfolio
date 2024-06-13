import './Projects.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Projects() {
   const [activeIndex, setActiveIndex] = useState(0);
   let activeLink = ''

   const carouselItems = [
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App', description: 'Simple CRUD app, created with React.js, and browser localstorage is used for data save', href: "https://alinapak.github.io/shoppingListApp2/" },
      { type: 'video', src: './videos/vue-form.mp4', title: 'Vue Form App', description: 'Simple CRUD app, created with Vue.js, all data is stored in browser localstorage for saving purposes', href: "https://github.com/alinapak/VueFormPinia" },
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App', description: '', href: '#' },
   ];
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
                        <i class="bi bi-box-arrow-up-right"></i><Link>Visit website</Link>
                     </div>
                  </div>
                  <video controls className="card-img-bottom p-5" src={item.src} type={item.type}></video>
               </div>
            ))}
         </section>
      </div>
   );
}

export default Projects;