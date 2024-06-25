import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Content/About/About';
import Projects from './Components/Content/Projects/Projects';
import SideNav from './Components/Navigation/SideNav';
import Home from './Components/Content/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

