import './SideNav.css';
import RouteLink from './RouteLink';

function SideNav() {
   const links = [
      { href: '/', title: 'About Me' },
      { href: './education-link', title: 'Education' },
      { href: './work-link', title: 'Work Experience' }
   ];
   return (
      <nav className="side-bar container">
         <div className="nav container d-flex flex-column align-items-cente">
            {links.map((link, index) => (
               <RouteLink key={index} href={link.href} title={link.title} />
            ))}
         </div>
      </nav>
   )
}

export default SideNav;