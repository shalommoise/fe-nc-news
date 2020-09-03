import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";

class MostTalkedAbout extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  articles = (topic, author, sort_by, order) =>
    api.getAllArticles(topic, author, sort_by, order).then((articles) => {
      const article = articles[0];
      this.setState({ article, isLoading: false });
    });

  componentDidMount() {
    this.articles(null, null, "comment_count", null);
  }
  render() {
    const { title, article_id } = this.state.article;
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div>
            <strong> Most Talked About: </strong> <i> {title}</i>{" "}
            <Link to={`/article/${article_id}`}>
              <button article_id={article_id}>View Article</button>
            </Link>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default MostTalkedAbout;
