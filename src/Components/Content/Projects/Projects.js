import './Projects.css';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import Loader from '../../Loader/Loader'
import { motion } from "framer-motion";

function Projects() {
   const [activeIndex, setActiveIndex] = useState(0);
   const [loading, setLoading] = useState(false);
   const [filterClicked, setFilterClicked] = useState(false);
   const videoRefs = useRef([]);
   const filters = ['ALL', 'FRONT\u2011END', 'BACK\u2011END', 'HTML5', 'SCSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT.JS', 'VUE.JS', 'MYSQL', 'LARAVEL', 'PHP', 'SYMFONY']
   const carouselItems = useMemo(() =>
      [{ type: 'video', src: './videos/responsive-design-page.mp4', title: 'Design imitation project', description: 'This project aims to imitate a specific design with responsive capabilities using Vue and Nuxt setup. Styling was implemented with raw CSS.', href: 'https://github.com/alinapak/ThirdTaskDesignPage' },
      { type: 'video', src: './videos/shopping-list.mp4', title: 'Shopping List App', description: 'Simple CRUD app, created with React.js, and browser localstorage is used for data save.', href: "https://alinapak.github.io/shoppingListApp2/" },
      { type: 'video', src: './videos/figma-design-app.mp4', title: 'Figma design FE project', description: 'A purpose of this project was to recreate a page, designed by Figma, with HTML, raw CSS and JavaScript.', href: 'https://github.com/alinapak/Friday-Chalenge' },
      { type: 'video', src: './videos/restaurantApp.mp4', title: 'Restaurant Management App', description: 'The Restaurant-Menu-Dish App was developed as a final assignment at Baltic Institute of Technology. It features a backend API built with Laravel for CRUD operations restricted to admins, alongside a React.js frontend providing read-only functionality for all users.', href: 'https://github.com/alinapak/RestaurantExam' },
      { type: 'video', src: './videos/theme-toggle-button.mp4', title: 'Theme toggle button', description: 'It is a button designed to switch the theme of a page. The project achieves this using raw HTML for structure, JavaScript for functionality, and SCSS for responsive styling of the button\'s circular switch.', href: 'https://github.com/alinapak/TaskNumberOne' },
      { type: 'video', src: './videos/ORM-app.mp4', title: 'Personnel Management App', description: 'This PHP project utilizes raw CSS and the PHP Composer library. It incorporates ORM Doctrine for managing database schemas with 1 relationships (1:M), displaying table data and their relations in the browser, implementing CRUD functionalities for employees and projects, and allowing assignment of employees to projects,.', href: 'https://github.com/alinapak/personnelManComposer' },
      { type: 'video', src: './videos/file-browser.mp4', title: 'PHP File Browser App', description: 'This project was created for educational purposes and includes features such as directory and file browsing, folder navigation, directory creation, file deletion, file uploading and downloading, and login authentication using raw CSS and PHP.', href: 'https://github.com/alinapak/fileNav' },
      { type: 'video', src: './videos/vue-form.mp4', title: 'Vue Form App', description: 'Simple CRUD app, created with Vue.js, all data is stored in browser localstorage for saving purposes.', href: "https://github.com/alinapak/VueFormPinia" },
      ], []);
   const [filteredItems, setFilteredItems] = useState(carouselItems);
   const handleIndicatorClick = (index) => {
      setFilterClicked(true)
      setActiveIndex(index);
   };
   const filterItems = (selectedFilter) => {
      setLoading(true); // only when it is not on mount
      if (selectedFilter === 'ALL') {
         setFilteredItems(carouselItems);
         return;
      }
      const filterMap = {
         'FRONT-END': ['React.js', 'Vue.js', 'Figma', 'Design', 'SCSS', 'localstorage'],
         'BACK-END': ['PHP', 'Laravel', 'API'],
         'HTML5': ['HTML'],
         'SCSS': ['SCSS'],
         'JAVASCRIPT': ['JavaScript', 'React.js', 'Vue.js'],
         'TYPESCRIPT': ['TypeScript'],
         'REACT.JS': ['React.js'],
         'VUE.JS': ['Vue'],
         'MYSQL': ['Management'],
         'LARAVEL': ['Laravel'],
         'PHP': ['PHP', 'Laravel'],
         'SYMFONY': ['Doctrine']
      };


      const normalizedFilter = selectedFilter.replace('\u2011', '-').toUpperCase();

      const filtered = carouselItems.filter(item =>
         filterMap[normalizedFilter].some(keyword =>
            item.description.toUpperCase().includes(keyword.toUpperCase()) ||
            item.title.toUpperCase().includes(keyword.toUpperCase())
         )
      );
      setFilteredItems(filtered);
   };
   const handleDivClick = (href) => {
      window.open(href, '_blank');
   };
   useEffect(() => {
      if (filterClicked) {
         filterItems(filters[activeIndex]);
         setTimeout(() => {
            setLoading(false);
         }, 1000)
      }
   }, [activeIndex]);

   useEffect(() => {

      const handleMouseEnter = (video) => {
         video.playbackRate = 2.0;
         video.play();
      };

      const handleMouseLeave = (video) => {
         video.pause();
      };

      videoRefs.current.forEach((video) => {
         video?.addEventListener('mouseenter', () => handleMouseEnter(video));
         video?.addEventListener('mouseleave', () => handleMouseLeave(video));
      });

      return () => {
         videoRefs.current.forEach((video) => {
            video?.removeEventListener('mouseenter', () => handleMouseEnter(video));
            video?.removeEventListener('mouseleave', () => handleMouseLeave(video));
         });
      };
   }, [!loading]);

   return (
      <motion.div className="projects"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>
         <section className="pt-2 container d-flex  flex-wrap gap-1">
            <div className="content-container d-flex justify-content-center flex-column text-white">
               <h1 className="display-1">
                  Projects
               </h1>
               <p className="display-6"> Here are a few projects, developed by me while learning web development</p>
               <div className="d-flex flex-wrap gap-2 filter-list">
                  {filters.map((filter, index) => (<button key={index} onClick={() => handleIndicatorClick(index)} className={`btn filter-btn ${activeIndex === index ? 'active' : ''}`}>{filter}</button>)
                  )}
               </div>
            </div>
         </section >
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-5">
            {loading && <Loader text={
               <>
                  {`${filters[activeIndex] === 'ALL' ? 'Showing' : 'Filtering'}`}
                  <em> {filters[activeIndex]} </em> projects
               </>
            } />}
            {!loading && <div className="row">
               {filteredItems.map((item, index) => (
                  <div key={index} className="col-sm-6 mt-4">
                     <div className="card h-100">
                        <div className="card-body d-flex flex-column p-5">
                           <h2 className="card-title">{item.title}</h2>
                           <p className="card-text">{item.description}</p>
                           <div
                              onClick={() => handleDivClick(item.href)} className="btn external-link mt-auto">
                              <i className="bi bi-box-arrow-up-right"></i><Link>Visit website</Link>
                           </div>
                        </div>
                        <div className="video-wrapper p-5">
                           <video ref={(el) => videoRefs.current[index] = el}
                              muted
                              controls className="card-img" src={item.src} type={item.type}
                           ></video>
                        </div>
                     </div>
                  </div>
               ))}
            </div>}

         </section>
      </motion.div >
   );
}

export default Projects;