import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import AuthorFilter from "./AuthorFilter";
import TopicFilter from "./TopicFilter";
import Loader from "./Loader";
class Articles extends Component {
  state = {
    topic: "",
    articles: [],
    author: "",
    isFilter: false,
    isLoading: true,
  };

  fetchArticles = (topic, author) => {
    api
      .getAllArticles(topic, author)
      .then((articles) => {
        this.setState({ articles });
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchArticles(this.state.topics);
  }

  handleChange = (changeEvent) => {
    this.setState({ topic: changeEvent.target.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.topic !== this.state.topic) {
      this.fetchArticles(this.state.topic, this.state.author);
    }
    if (prevState.author !== this.state.author) {
      this.fetchArticles(this.state.topic, this.state.author);
    }
  }

  didAuthorChange = (dataFromFilter) => {
    this.setState({ author: dataFromFilter });
  };
  didTopicChange = (dataFromFilter) => {
    this.setState({ topic: dataFromFilter });
  };
  changeFilterBar = (event) => {
    this.setState({ isFilter: !this.state.isFilter });
  };

  reset = () => {
    this.setState((currrentState) => {
      return {
        ...currrentState,
        topic: "",
        author: "",
        isFilter: !this.state.isFilter,
      };
    });
  };

  render() {
    return (
      <div>
        {!this.state.isFilter && (
          <button onClick={this.changeFilterBar}>Filters</button>
        )}
        {this.state.isFilter && (
          <div className="filters">
            <TopicFilter isTopic={this.didTopicChange} />
            <AuthorFilter isAuthor={this.didAuthorChange} />
            <Link to="/articles">
              <button onClick={this.reset}>Reset</button>
            </Link>
          </div>
        )}

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <h2>{this.state.articles.length} articles</h2>
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
