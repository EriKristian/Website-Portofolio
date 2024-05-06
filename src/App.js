import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portofolio from './components/Portofolio/Portofolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <About/>
      <Portofolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
