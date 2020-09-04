import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class RecentlyPublished extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  articles = () =>
    api.getAllArticles().then((articles) => {
      const article = articles[0];
      this.setState({ article, isLoading: false });
    });

  componentDidMount() {
    this.articles();
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
                <strong> Recently Published: </strong> <i> {title}</i>{" "}
                {/* <button className="articleshow" article_id={article_id}>
                View Article
              </button> */}
              </button>{" "}
            </Link>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default RecentlyPublished;
