import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SideNav from './Components/Navigation/SideNav';
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './Components/AnimatedRoutes/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;

