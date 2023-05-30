import React from "react";

// all defined styles (for each component) are exported to the root of the container folder '../container/index.js'
import { About, Footer, Header, Skills, Work } from "./container";

import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
