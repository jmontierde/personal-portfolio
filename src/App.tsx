import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-[#212524]">
      <Header/>
      <About/>
      <Services
        title=""
        list = {[]}
        description=""
      />
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
