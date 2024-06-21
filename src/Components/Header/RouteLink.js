import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';

function RouteLink({ href, title, key, component }) {
   const location = useLocation();
   const hash = location.hash;
   const originalLinkRef = useRef(null);
   const clonedLinkRef = useRef(null);
   useEffect(() => {
      if (hash === '') {
         window.scrollTo({
            top: 0,
            behavior: 'instant'
         });
      }
   }, [location.pathname]);
   useEffect(() => {
      if(component !== 'home') {
         return
      }
      const originalLink = originalLinkRef.current;
      const clonedLink = originalLink.cloneNode(true);

      clonedLink.style.position = 'absolute';
      clonedLink.style.top = `${originalLink.getBoundingClientRect().top}px`;
      clonedLink.style.left = `${originalLink.getBoundingClientRect().left}px`;
      clonedLink.style.zIndex = 1000; 
      clonedLink.classList.add('cloned-link');
      document.body.appendChild(clonedLink);
      clonedLinkRef.current = clonedLink;
      clonedLink.style.visibility = 'visible';
      originalLink.style.visibility = 'hidden';
      clonedLink.addEventListener('mouseleave', (e) => {
      const root = document.getElementById('root');
         root.classList.remove('blur');
         e.target.classList.remove('not-blur')
      });
      clonedLink.addEventListener('mouseenter', (e) => {
         const root = document.getElementById('root');
            root.classList.add('blur');
             e.target.classList.add('not-blur')
         });
         return () => {
            clonedLink.remove();
         };
   }, [component]);
   // Function to determine if the link is active
   const isActive = (target) => {
      return location.pathname === target.replace('.', "");
   };
   return (
         <Link ref={originalLinkRef} className={`nav-link ${isActive(href) ? 'active' : ''}`} to={href} rel="noreferrer" >
            {title === 'logo' ? <img className="p-2 m-2" src="./Images/logo-svg.svg" alt="Logo" /> : title}
         </Link >
   )
}

export default RouteLink;