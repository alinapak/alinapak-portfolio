import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';

function RouteLink({ href, title, key }) {
   const location = useLocation();
   const hash = location.hash
   useEffect(() => {
      if (hash === '') {
         window.scrollTo({
            top: 0,
            behavior: 'instant' // change to 'smooth' if you prefer smooth scrolling
         });
      }
   }, [hash, location]);
   // Function to determine if the link is active
   const isActive = (target) => {
      console.log(location.pathname, 'target')
      return location.pathname === target.replace('.', "");
   };
   return (
      <Link className={`nav-link ${isActive(href) ? 'active' : ''}`} to={href} rel="noreferrer" >
         {title === 'logo' ? <img className="p-2 m-2" src="./Images/logo-svg.svg" alt="Logo" /> : title}
      </Link >
   )
}

export default RouteLink;