import { Link } from "react-router-dom";

function RouteLink({ href, title }) {
   return (
      <Link className="nav-link text-white" to={href} rel="noreferrer">
         {title}
      </Link>
   )
}

export default RouteLink;