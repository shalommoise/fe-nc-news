import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import LogIn from "./components/LogIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <LogIn path="/account" />
      </Router>
    </div>
  );
}

export default App;
