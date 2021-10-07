import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from './Route/Section';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import Wrapper from './Component/Wrapper';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import dotenv from "dotenv";
import React from 'react'
AOS.init();

dotenv.config();

function App() {
  const [location, setLocation] = useState({});
  const getLocation = (location: any) => {
    setLocation(location)
  };
  return (
    <Router>
        <NavBar/>
        <Section getLocation={getLocation}/>
        <Footer className="footer-stick"/>
    </Router>
  );
}

export default App;
