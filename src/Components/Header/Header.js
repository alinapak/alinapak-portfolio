import './Header.css'

function Header() {
   return (
      <header className="d-flex header">
         <img className="p-2 m-2" src="./Images/as.png" alt="Me" />
         <div className="d-flex flex-column text-center">
            <h1 className="display-1">
               Alina Pakamorytė
            </h1>
            <p className="display-6">Web Developer</p>
         </div>
      </header>
   )
}

export default Header;
