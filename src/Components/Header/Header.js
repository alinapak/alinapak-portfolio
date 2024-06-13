import './Header.css'
import RouteLink from './RouteLink';

function Header() {
   const links = [
      { href: './', title: 'Home' },
      { href: './about', title: 'About Me' },
      { href: './projects', title: 'Projects' }
   ];
   // TODO: add skills section
   // TODO: set styles separately?

   return (
      <header className="d-flex header align-items-center fixed-top">
         <RouteLink key={-1} href='./' title={'logo'} ></RouteLink>
         <div className="nav d-flex justify-content-end gap-1">
            {links.map((link, index) => (
               <RouteLink key={index} href={link.href} title={link.title} />
            ))}
         </div>
      </header>
   )
}

export default Header;
