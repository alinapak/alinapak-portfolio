import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

function RouteLink({ href, title, component }) {
   const location = useLocation();
   const hash = location.hash;
   const originalLinkRef = useRef(null);
   const clonedLinkRef = useRef(null);
   const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
   });
   useEffect(() => {
      if (hash === '') {
         const sideNav = document.getElementsByClassName('side-bar');
         if (component !== 'home') {
            const clonedLinks = document.getElementsByClassName('cloned-link');
            Array.from(clonedLinks).forEach(link => {
               link.remove();
            });

            if (sideNav[0]) {
               sideNav[0].style.visibility = 'hidden'
            }
         } else {
            sideNav[0].style.visibility = 'visible'
         }

         window.scrollTo({
            top: 0,
            behavior: 'instant'
         });
      }
   }, [location.pathname]);
   useEffect(() => {
      if (component !== 'home') {
         return
      }
      const originalLink = originalLinkRef.current;
      const clonedLink = clonedLinkRef.current;

      const handleResize = () => {
         const newWindowSize = {
            width: window.innerWidth,
            height: window.innerHeight
         };
         if (originalLink && clonedLink) {
            clonedLink.style.top = `${originalLink.getBoundingClientRect().top + window.scrollY}px`;
            clonedLink.style.left = `${originalLink.getBoundingClientRect().left}px`;
            document.body.appendChild(clonedLink);
            if ((newWindowSize.width !== windowSize.width ||
               newWindowSize.height !== windowSize.height)) {
               clonedLink.classList.remove('animate-fade-in');
            }
         }
         setWindowSize(newWindowSize);
      };

      // Attach resize event listener
      window.addEventListener('resize', handleResize);
      handleResize();
      // Cleanup function to remove event listener
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [originalLinkRef, clonedLinkRef, component]);

   // useEffect(() => {
   //    if (component !== 'home') {
   //       return
   //    }
   //    const originalLink = originalLinkRef.current;
   //    const clonedLink = originalLink.cloneNode(true);

   //    clonedLink.style.position = 'absolute';
   //    clonedLink.style.top = `${originalLink.getBoundingClientRect().top}px`;
   //    clonedLink.style.left = `${originalLink.getBoundingClientRect().left}px`;
   //    clonedLink.style.zIndex = 1000;
   //    clonedLink.classList.add('cloned-link');
   //    clonedLink.classList.add('animate-fade-in');
   //    clonedLinkRef.current = clonedLink;
   //    clonedLink.style.visibility = 'visible';
   //    originalLink.style.visibility = 'hidden';
   //    clonedLink.addEventListener('mouseleave', (e) => {
   //       const root = document.getElementById('root');
   //       root.classList.remove('blur');
   //       e.target.classList.remove('not-blur')
   //    });
   //    clonedLink.addEventListener('mouseenter', (e) => {
   //       const root = document.getElementById('root');
   //       root.classList.add('blur');
   //       e.target.classList.add('not-blur');
   //    });
   //    return () => {
   //       clonedLink.remove();
   //    };
   // }, [component]);
   // Function to determine if the link is active
   const isActive = (target) => {
      return location.pathname === target.replace('.', "");
   };
   return (
      <Link ref={originalLinkRef} className={`nav-link ${isActive(href) ? 'active' : ''}`} to={href} rel="noreferrer" >
         {title === 'logo' ? <img className="p-2 m-2" src="./Images/logo-svg.svg" alt="Logo" /> : <span style={{ position: 'relative', zIndex: 1 }}>{title}</span>}
      </Link >
   )
}

export default RouteLink;