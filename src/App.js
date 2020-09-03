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
      // username: "tickle122",
      // avatar_url:
      //   "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
      // name: "Tom Tickle",
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
          <Home path="/" />
          <Articles path="/articles" />
          <Articles path="/articles/topics/:topic" />
          <Articles path="/articles/authors/:author" />
          <Articles path="/articles/sort/:sort_by/:order" />
          <SingleArticle
            path="/article/:article_id"
            loggedIn={this.state.loggedIn}
          />
          <LogIn path="/account" logged={this.haveUser} />
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
