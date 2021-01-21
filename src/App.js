import React, { useState } from "react";
import Header from "./Components/Header";
import Headshot from './Components/Headshot';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from "./Components/Footer";

import './App.css'

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <Header />
        </header>
      </div>
      <div>
        <main>
          <aside>
            <Headshot />
          </aside>
          <div>
            <AboutMe />
            <Portfolio />
            <Contact />
          </div>
        </main>
      </div>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App;
