import React, { Component } from "react";
import * as api from "../utils/api";

class UserInfo extends Component {
  state = { articles: [] };

  fetchArticle = () =>
    api
      .getAllArticles(null, this.props.username, null, null)
      .then((articles) => {
        this.setState({ articles: articles });
      });

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.username !== this.props.username) {
      this.fetchArticle();
    }
  }
  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const usersArtciles = this.state.articles;

    return (
      <div>
        <p>written {usersArtciles.length} articles</p>
      </div>
    );
  }
}

export default UserInfo;
