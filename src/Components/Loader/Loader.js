import './Loader.css';


function Loader({ text }) {
   return (
      <div className="loader-overlay">
         <div className="loader"></div>
         <div className="display-6 loader-text text-uppercase">{text}</div>
      </div>
   )
}
export default Loader;