import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './Pages/Homes/Homes';
import Login from './Pages/Login';
import RegisterasUser from './Pages/RegisterasUser';
import ReportSection from './Pages/ReportSection';
import Contactpage from './Pages/Contactpage';
import Section3 from './Pages/Homes/Section3';
import Section2 from './Pages/Homes/Section2';


function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homes />} />
    <Route path="/login"  element={<Login/> }  />
    <Route path="/register_user" element={<RegisterasUser/>} />
    <Route path="/report"  element={<ReportSection/>} />
    <Route path='/contact' element={<Contactpage/>} />
    <Route path='/service' element={<Section3/>} />
    <Route path='/about' element={<Section2/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
