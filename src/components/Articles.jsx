import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import AuthorFilter from "./AuthorFilter";
import TopicFilter from "./TopicFilter";
import Loader from "./Loader";
import OrderBy from "./OrderBy";
import AscDescButton from "./AscDescButton";
import { formatDate } from "../utils/util_funcs";
class Articles extends Component {
  state = {
    articles: [],
    isOrder: false,
    isFilter: false,
    isLoading: true,
    order: "desc",
  };

  fetchArticles = (topic, author, sort_by, order) => {
    api
      .getAllArticles(topic, author, sort_by, order)
      .then((articles) => {
        this.setState({ articles });
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    const { topic, author, sort_by } = this.props;
    this.fetchArticles(topic, author, sort_by, this.state.order);
  }

  handleChange = (changeEvent) => {
    this.setState({ topic: changeEvent.target.value });
  };
  componentDidUpdate(prevProps, prevState) {
    const { topic, author, sort_by } = this.props;

    if (
      prevProps.topic !== topic ||
      prevProps.author !== author ||
      prevProps.sort_by !== sort_by ||
      prevState.order !== this.state.order
    ) {
      this.fetchArticles(topic, author, sort_by, this.state.order);
    }
  }
  showOrder = () => {
    this.setState((currrentState) => {
      return { isOrder: !this.state.isOrder };
    });
  };
  didAuthorChange = (dataFromFilter) => {
    this.setState({ author: dataFromFilter });
  };
  didTopicChange = (dataFromFilter) => {
    this.setState({ topic: dataFromFilter });
  };
  ascOrDesc = (dataFromAscDescButton) => {
    this.setState({ order: dataFromAscDescButton });
  };
  changeFilterBar = (event) => {
    this.setState({ isFilter: !this.state.isFilter });
  };

  render() {
    return (
      <div>
        <AscDescButton order={this.state.order} isOrder={this.ascOrDesc} />
        <div>
          {!this.state.isOrder ? (
            <button onClick={this.showOrder}>Order By</button>
          ) : (
            <div className="orders">
              <OrderBy order={this.state.order} />
            </div>
          )}
        </div>

        <div>
          {!this.state.isFilter && (
            <button onClick={this.changeFilterBar}>Filters</button>
          )}

          {this.state.isFilter && (
            <div className="filters">
              <TopicFilter isTopic={this.didTopicChange} />
              <AuthorFilter isAuthor={this.didAuthorChange} />
              <Link to="/articles">
                <button>Reset</button>
              </Link>
            </div>
          )}
        </div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <h2>{this.state.articles.length} articles</h2>
        )}
        <ul className="longlist">
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id} className="bigitem">
                <div className="main">
                  <h3>{article.title}</h3>
                  <h3>By: {article.author}</h3>
                  <h4>Topic: {article.topic}</h4>
                  <Link to={`/article/${article.article_id}`}>
                    <button article_id={article.article_id}>
                      View Article
                    </button>
                  </Link>
                </div>
                <div className="comments">
                  <h5>Published on: {formatDate(article.created_at)}</h5>
                  <h6>
                    Votes: {article.votes} comments: {article.comment_count}
                  </h6>
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
