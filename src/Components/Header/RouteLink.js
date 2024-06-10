import { Link, useLocation } from "react-router-dom";

function RouteLink({ href, title, key }) {
   const location = useLocation();

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