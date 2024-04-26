import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Content/About';
import SideNav from './Components/Navigation/SideNav';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route exact path='/' element={<About />} />
        {/* <Route exact path='/home' element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

