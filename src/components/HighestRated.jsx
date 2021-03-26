import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class HighestRated extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  fetchArticles = (topic, author, sort_by, order) =>
    api.getAllArticles(topic, author, sort_by, order).then((articles) => {
      const article = articles[0];
      this.setState({ article, isLoading: false })
    }).catch(()=>this.setState({err: true,  isLoading: false }));

  componentDidMount() {
    this.fetchArticles(null, null, "votes", null);
  }
  render() {
    const {article, isLoading,err}  = this.state
    const { title, article_id } = article;
    return (
      <div>
        {isLoading ? (
          <p onClick={()=>console.log(this.state)}>Loading ...</p>
        )  :  err ? (
        <p></p>
        
        ): (
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
