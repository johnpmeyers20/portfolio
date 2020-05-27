import React, { useState } from "react";
import Header from "./Components/Header";
import Headshot from './Components/Headshot';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from "./Components/Footer";


function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Headshot />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
