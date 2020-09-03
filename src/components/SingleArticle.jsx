import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import RatingButton from "./RatingButton";
import ShowComments from "./ShowComments";
import { formatDate } from "../utils/util_funcs";
import { navigate } from "@reach/router";
class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };
  fetchArticle = (article_id) => {
    api
      .getSingleArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .then(() => {
        localStorage.setItem("title", this.state.article.title);
        localStorage.setItem("author", this.state.article.author);
        localStorage.setItem("article_id", this.state.article.article_id);
      })
      .catch((err) => {
        console.log(err);
        navigate("/Err", {
          state: { ErrorMessage: err },
          replace: true,
        });
      });
  };

  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }
  render() {
    const { username } = this.props.loggedIn;
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
                <li className="details">
                  Posted on : {formatDate(created_at)}
                </li>
                <li className="details">
                  {" "}
                  Comments: {comment_count}{" "}
                  <ShowComments id={article_id} username={username} />
                </li>
              </ul>
              <div className="ratingButton">
                {username && author !== username && (
                  <RatingButton id={article_id} votes={votes} />
                )}
                {!username && <h4>Please log in to rate an article</h4>}
                {author === username && (
                  <p id="cannotrate">You cannot rate your own articles</p>
                )}
              </div>
            </div>
          )
        )}
      </section>
    );
  }
}

export default SingleArticle;
