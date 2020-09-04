import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class HighestRated extends Component {
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
    this.articles(null, null, "votes", null);
  }
  render() {
    const { title, article_id } = this.state.article;
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div>
            <Link to={`/article/${article_id}`}>
              <button className="articleshow" article_id={article_id}>
                <strong> Highest Rated: </strong> <i> {title}</i>{" "}
              </button>
            </Link>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default HighestRated;
