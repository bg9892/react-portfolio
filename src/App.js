import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"} component={Section} />
          <Route exact path={"/portfolio"} component={Portfolio} />
          {/* <Route exact path={"/contact"} component={Contact} /> */}
          <Route component={Section} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
