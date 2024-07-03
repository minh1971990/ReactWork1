import React from 'react';
import Right from './new';
import Example1 from './slider';
import Navbar from "./NavBar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import Example from "./Slide"

function App () {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Home />
      break
    case "/about":
      Component = <About />
      break
    case "/contact":
      Component = <Contact />
      break

  }
  
  return (
    <>
    <Navbar />
    {Component}
    <Right />
    </>
    
  );
};

export default App;

