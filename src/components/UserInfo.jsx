import React, { Component } from "react";
import * as api from "../utils/api";

class UserInfo extends Component {
  state = { user: {}, articles: [], comments: [] };

  users = () =>
    api.getAuthors().then((users) => {
      const singleUser = users.filter((user) => {
        return user.username === this.props.username;
      });
      const one = singleUser[0];
      this.setState({ user: one });
    });

  articles = () =>
    api.getAllArticles().then((articles) => {
      const singleUser = articles.filter((article) => {
        return article.author === this.props.username;
      });

      this.setState({ articles: singleUser });
    });
  comments = () => {
    api.getAllComments().then((comments) => {
      const singleUserComments = comments.filter((comment) => {
        return comment.author === this.props.username;
      });
      this.setState({ comments: singleUserComments });
    });
  };

  componentDidUpdate(prevProps, PrevState) {
    if (
      prevProps.username !== this.props.username ||
      PrevState.articles !== this.state.articles
    ) {
      this.articles();
    }
  }
  componentDidMount() {
    this.articles();
    this.comments();
  }
  render() {
    const usersArtciles = this.state.articles;
    const usersComments = this.state.comments;

    return (
      <div>
        <p>
          written {usersArtciles.length} articles and {usersComments.length}{" "}
          comments
        </p>
      </div>
    );
  }
}

export default UserInfo;
