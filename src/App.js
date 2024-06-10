import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Content/About/About';
import Education from './Components/Content/Education/Education';
import Experience from './Components/Content/WorkExperience/Experience';
import SideNav from './Components/Navigation/SideNav';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <SideNav /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/education' element={<Education />} />
        <Route exact path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

