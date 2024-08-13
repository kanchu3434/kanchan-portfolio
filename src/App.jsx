import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Heroin from './Components/Heroin/Heroin';
import About from './Components/About/About';

import Contact from './Components/Contact/Contact';



const App = () => {
  return (
    <div>
   <Navbar/>
      <Heroin/>
      <About/>
      <Contact/>
     
   
    </div>
  )
};

export default App