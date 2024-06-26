import React from 'react';
import About from '../../Components/Content/About/About';
import Projects from '../../Components/Content/Projects/Projects';
import Home from '../../Components/Content/Home/Home';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
   const location = useLocation()
   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
         </Routes>
      </AnimatePresence>
   );
}

export default AnimatedRoutes;