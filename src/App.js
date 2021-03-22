import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import AboutMe from "./pages/js/AboutMe.js";
import Portfolio from "./pages/js/Portfolio.js";
import Contract from "./pages/js/Contract.js";

function App() {
  return (
    <Router>
      <Navbar>

      </Navbar>
      <Route path="/">
      <AboutMe />
      </Route>
      <Route path="/portfolio">
      <Portfolio />
      </Route>
      <Route path="/contact">
        <Contract />
      </Route>
    </Router>
  );
}

export default App;
