import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import LogIn from "./components/LogIn";
import SingleArticle from "./components/SingleArticle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <Articles path="/articles/topics/:topic" />
        <Articles path="/articles/authors/:author" />
        <Articles path="/articles/sort/:sort_by/:order" />
        <SingleArticle path="/article/:article_id" />
        <LogIn path="/account" />
      </Router>
    </div>
  );
}

export default App;
