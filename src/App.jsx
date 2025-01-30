import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Footer from './components/Footer';
import data from './data.json';

function App() {
  return (
    <div className="container animated-content">
      <Header name={data.name} role={data.role} />
      <About about={data.about} contact={data.contact} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      {/* <Footer name={data.name} /> */}
    </div>
  );
}

export default App;
