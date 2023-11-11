
import './App.css';
import React  from 'react';

import Navbar2 from './components/Navbar2';
import Home from './components/Home';

// import Footer from './components/Footer';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Thankyou from './components/Thankyou';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Projects from './components/Projects';

function App() {

  return (
   <>

      <BrowserRouter>
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/project" element={<Projects/>} />
          </Routes>
        
        </BrowserRouter>











 
   
   </>
  );
}

export default App;
