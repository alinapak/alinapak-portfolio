import './Footer.css'
import Icon from './FooterIcons'

function Footer() {
   const currentYear = new Date().getFullYear();
   const icons = [
      { name: 'linkedin', href: 'https://www.linkedin.com/in/alina-pakamoryt%C4%97-73a66377/' },
      { name: 'github', href: 'https://github.com/alinapak/' },
      { name: 'cart', href: 'https://alinapak.github.io/shoppingListApp2/' },
   ];
   return (
      <footer className="p-2 footer d-flex flex-column justify-content-end">
         <div className="container icon-wrap d-flex justify-content-center">
            {icons.map((icon, index) => (
               <Icon key={index} name={icon.name} href={icon.href} />
            ))}
         </div>
         <p className="text-center">
            © {currentYear} by Alina Pakamorytė
         </p>
      </footer>
   )
}

export default Footer;