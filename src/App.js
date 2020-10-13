import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactCard from "./components/ContactCard";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactcard">
          <ContactCard />
        </Route>
      </Switch>
    </Router>
  );
}
