import React from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/sass/main.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Highlights from "./components/Highlights/Highlights";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Header />
        <Features />
        <Highlights />
        <Testimonial />
        <Subscribe />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
