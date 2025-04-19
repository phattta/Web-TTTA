import React from 'react';
import Navbar from '../Navbar/Navbar';
import About1 from './components/About1';
import About2 from './components/About2';  
import About3 from './components/About3';
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <About1 />
      <About2 />
      <About3 />
      <Footer />
    </div>
  );
}
