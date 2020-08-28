import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    topics: [],
    topic: "",
    authors: [],
    author: "",
    isFilter: false,
  };

  fetchArticles = (topic) => {
    api.getAllArticles(topic).then((articles) => {
      this.setState({ articles });
    });
  };
  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  componentDidMount() {
    this.fetchArticles(this.state.topics);
    this.fetchTopics();
  }

  handleChange = (changeEvent) => {
    this.setState({ topic: changeEvent.target.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.topic !== this.state.topic) {
      this.fetchArticles(this.state.topic);
    }
  }
  changeFilterBar = (event) => {
    this.setState({ isFilter: !this.state.isFilter });
  };
  render() {
    return (
      <div>
        {!this.state.isFilter && (
          <button onClick={this.changeFilterBar}>Filters</button>
        )}
        {this.state.isFilter && (
          <form action="" onChange={this.handleChange}>
            <label htmlFor="Topics">Topic</label>
            <select name="topics" id="topics">
              <option key="" value="">
                all
              </option>
              {this.state.topics.map((topic) => {
                return (
                  <option
                    key={`${topic.slug}`}
                    value={`${topic.slug}`}
                  >{`${topic.slug}`}</option>
                );
              })}
            </select>
          </form>
        )}
        <ul>
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id}>
                <div className="main">
                  <h3>{article.title}</h3>
                  <h3>By: {article.author}</h3>
                  <h4>Topic: {article.topic}</h4>
                  <Link to={`/article/${article.article_id}`}></Link>{" "}
                  <button>View Article</button>
                </div>
                <div className="comments">
                  <h5>Posted: {article.created_at}</h5>
                  <h6>Votes: {article.votes}</h6>
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
