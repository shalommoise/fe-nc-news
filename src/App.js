import React, { Component } from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import LogIn from "./components/LogIn";
import SingleArticle from "./components/SingleArticle";
import CommentDetails from "./components/CommentDetails";
import PostComment from "./components/PostComment";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: {
      username: localStorage.getItem("username"),
      avatar_url: localStorage.getItem("avatar_url"),
      name: localStorage.getItem("name"),
    },
  };
  haveUser = (loggerData) => {
    this.setState({ loggedIn: loggerData });
  };

  render() {
    return (
      <div className="App">
        <Header logger={this.state.loggedIn} />
        <Router>
          <Home path="/" logger={this.state.loggedIn} />
          <Articles path="/articles" />
          <Articles path="/articles/topics/:topic" />
          <Articles path="/articles/authors/:author" />
          <Articles path="/articles/sort/:sort_by/:order" />
          <SingleArticle
            path="/article/:article_id"
            loggedIn={this.state.loggedIn}
          />
          <LogIn
            path="/account"
            logged={this.haveUser}
            loggedIn={this.state.loggedIn}
          />
          <CommentDetails
            path="/article/:article_id/comments"
            loggedIn={this.state.loggedIn}
          />
          <PostComment
            path="/article/:article_id/comment"
            loggedIn={this.state.loggedIn}
          />
        </Router>
      </div>
    );
  }
}
export default App;
