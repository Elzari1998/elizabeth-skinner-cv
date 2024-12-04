import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/AboutMe.jsx';
import TechnicalProficiencies from './components/TechnicalProficiencies.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import '../index.css';

function App() {
  return (
    <div>
      <header>
        <h1>Elizabeth Skinner</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/technical-proficiencies">Technical Proficiencies</a>
          <a href="/education">Education</a>
          <a href="/experience">Professional Experience</a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technical-proficiencies" element={<TechnicalProficiencies />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <footer>
        <p>Contact Information: elzariskinner@gmail.com | +27 82 823 3925</p>
      </footer>
    </div>
  );
}

export default App;
