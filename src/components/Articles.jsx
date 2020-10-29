import React, { Component } from "react";
import * as api from "../utils/api";

import AuthorFilter from "./AuthorFilter";
import TopicFilter from "./TopicFilter";
import Loader from "./Loader";
import OrderBy from "./OrderBy";
import AscDescButton from "./AscDescButton";
import ArticleCard from "./ArticleCard";
import SearchError from "./SearchError";
class Articles extends Component {
  state = {
    articles: [],
    isOrder: false,
    isLoading: true,
    order: "desc",
    topic: "",
    author: "",
  };

  fetchArticles = (topic, author, sort_by, order) => {
    api.getAllArticles(topic, author, sort_by, order).then((articles) => {
      this.setState({ articles, isLoading: false });
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
    console.log(dataFromFilter);
    this.setState({ author: dataFromFilter });
  };
  didTopicChange = (dataFromFilter) => {
    console.log(dataFromFilter);
    this.setState({ topic: dataFromFilter });
  };
  ascOrDesc = (dataFromAscDescButton) => {
    this.setState({ order: dataFromAscDescButton });
  };

  render() {
    const { articles, isOrder, isLoading, order } = this.state;
    return (
      <div>
        <div className="filters">
          <TopicFilter isTopic={this.didTopicChange} />
          <AuthorFilter isAuthor={this.didAuthorChange} />
        </div>
        <div className="filterorder">
          {!isOrder ? (
            <button onClick={this.showOrder}>
              <p> Order By </p>
            </button>
          ) : (
            <div className="orders">
              <OrderBy
                order={isOrder}
                topic={this.props.topic}
                author={this.props.author}
              />
            </div>
          )}
        </div>

        <div className="filterorder">
          <AscDescButton order={order} isOrder={this.ascOrDesc} />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <SearchError
            articles={articles}
            topic={this.props.topic}
            author={this.props.author}
          />
        )}
        {!isLoading && (
          <ul className="mainUser">
            {articles.map((article) => {
              return (
                <li key={article.article_id} className="bigitem">
                  <ArticleCard article={article} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Articles;
