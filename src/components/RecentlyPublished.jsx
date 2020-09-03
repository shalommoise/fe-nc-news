import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
class RecentlyPublished extends Component {
  state = {
    article: {},
  };

  articles = () =>
    api.getAllArticles().then((articles) => {
      const article = articles[0];
      this.setState({ article });
    });

  componentDidMount() {
    this.articles();
  }
  render() {
    const { title, article_id } = this.state.article;
    return (
      <div>
        <strong> Recently Published: </strong> <i> {title}</i>{" "}
        <Link to={`/article/${article_id}`}>
          <button article_id={article_id}>View Article</button>
        </Link>
      </div>
    );
  }
}

export default RecentlyPublished;
