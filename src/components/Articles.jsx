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
        <div className="filterorder">
          <AscDescButton order={this.state.order} isOrder={this.ascOrDesc} />
          <div>
            {!this.state.isOrder ? (
              <button onClick={this.showOrder}>
                <p> Order By </p>
              </button>
            ) : (
              <div className="orders">
                <OrderBy order={this.state.order} />
              </div>
            )}
          </div>

          <div>
            {!this.state.isFilter && (
              <button onClick={this.changeFilterBar}>
                <p> Filters </p>
              </button>
            )}

            {this.state.isFilter && (
              <div className="filters">
                <TopicFilter isTopic={this.didTopicChange} />
                <AuthorFilter isAuthor={this.didAuthorChange} />
              </div>
            )}
          </div>
        </div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <h2>Showing {this.state.articles.length} articles</h2>
        )}
        <ul className="longlist">
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id} className="bigitem">
                <div className="main">
                  <h3 id="title">{article.title}</h3>
                  <h6 id="author">By: {article.author}</h6>
                  <h6 id="topic">Topic: {article.topic}</h6>
                </div>
                <div className="comments">
                  <h6 id="created_at">
                    Published on: {formatDate(article.created_at)}
                  </h6>
                  <h6 id="votes">
                    Rating: {article.votes} comments: {article.comment_count}
                  </h6>
                  <Link to={`/article/${article.article_id}`}>
                    <button
                      id="view_article_button"
                      article_id={article.article_id}
                    >
                      View Article
                    </button>
                  </Link>
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
