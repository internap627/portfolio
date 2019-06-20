import React from 'react';
import './App.scss';
import Hero from './Hero';
import Features from './Features';
import Skills from './Skills';
import Projects from './Projects';
import Blogs from './Blogs'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <header className="Header">
       
      </header>
      <Hero />
      <Features />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
