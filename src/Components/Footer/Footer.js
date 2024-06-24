import './Footer.css'

function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="p-2 footer d-flex flex-column justify-content-end">
         <p className="text-center">
            © {currentYear} by Alina Pakamorytė
         </p>
      </footer>
   )
}

export default Footer;