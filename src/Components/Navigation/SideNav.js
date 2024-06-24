import './SideNav.css';
import Icon from './SideNavIcons'
// import RouteLink from '../Header/RouteLink';

function SideNav() {
   const icons = [
      { name: 'linkedin', href: 'https://www.linkedin.com/in/alina-pakamoryt%C4%97-73a66377/' },
      { name: 'github', href: 'https://github.com/alinapak/' },
      { name: 'cart', href: 'https://alinapak.github.io/shoppingListApp2/' },
   ];
   // TODO: add skills section
   // TODO: set styles separately?

   return (
      <nav className="side-bar">
         <div className="nav container d-flex flex-column align-items-center justify-content-center">
            {icons.map((icon, index) => (
               <Icon key={index} name={icon.name} href={icon.href} />
            ))}
         </div>
      </nav>
   )
}

export default SideNav;