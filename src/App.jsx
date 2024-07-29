import React from 'react';
import Nav from './Components/Nav';
import Techstack from './Components/Techstack';
import Home from './Components/Home';
import Project from './Components/Projects';
import LetsConnect from './Components/LetsConnect';
import Footer from './Components/Footer';
import Quote from './Components/Quote';
function App() {
  return (
    <div >
      <Nav />
     
         <Home />
      <Techstack />
       <Project />
           <LetsConnect />
      
   
      <Footer />
      
    </div>
  );
}

export default App;