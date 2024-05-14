import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Food from './Components/Food'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Footer/>
    </div>
  );
}

export default App;
