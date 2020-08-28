import React, { Component } from "react";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.getAllArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id}>
                <div className="main">
                  <h3>{article.title}</h3>
                  <h3>By: {article.author}</h3>
                  <h4>Topic: {article.topic}</h4>
                  <p>{article.body}</p>
                </div>
                <div className="comments">
                  <h5>Posted on: {article.created_at}</h5>
                  <h6>Votes: {article.votes}</h6>
                  <button>Comments: {article.comment_count}</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
