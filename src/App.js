import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css';
import Cursor from './Cursor';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Home from "./Home";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Portfolio" element={<Portfolio />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


