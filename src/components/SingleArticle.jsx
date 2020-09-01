import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import RatingButton from "./RatingButton";
class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };
  fetchArticle = (article_id) => {
    api.getSingleArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }
  render() {
    const {
      article_id,
      title,
      body,
      topic,
      votes,
      created_at,
      comment_count,
      author,
    } = this.state.article;
    return (
      <section className="singlearticle">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          !this.state.isLoading && (
            <div>
              <h1>{title}</h1>
              <h3>By {author}</h3>

              <p>{body}</p>
              <ul className="details">
                <li className="details">Topic: {topic} </li>
                <li className="details">Posted on : {created_at}</li>
                <li className="details">Rating: {votes}</li>
                <li className="details"> Comments: {comment_count}</li>
              </ul>
              <RatingButton id={article_id} />
            </div>
          )
        )}
      </section>
    );
  }
}

export default SingleArticle;
