import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class PostComment extends Component {
  state = {
    isLoading: true,
    article: {},
    success: false,
    body: "",
    comments: [],
  };
  fetchArticle = (article_id) => {
    api.getSingleArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };
  addComment = (article_id, username, body) => {
    api.postComment(article_id, username, body);
  };
  handleChange = (changeEvent) => {
    if (this.state.body !== changeEvent.target.value)
      this.setState({ body: changeEvent.target.value });
  };
  handleClick = (event) => {
    this.setState({ success: true });
    event.preventDefault();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.success !== this.state.success) {
      this.addComment(
        this.props.article_id,
        this.props.loggedIn.username,
        this.state.body
      );

      this.setState({
        article: {
          ...this.state.article,
          comment_count: this.state.article.comment_count + 1,
        },
      });
    }
  }
  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }
  render() {
    const { isLoading, article, success, body } = this.state;
    const { loggedIn, article_id } = this.props;
    return (
      <div>
        <Link to={`/article/${article_id}`}>
          <button>Back to Article</button>
        </Link>
        <Link to={`/article/${this.props.id}/comments`}>
          <button>Show more comments</button>
        </Link>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <h2>Leave a comment</h2>
            <p>
              The article <i>{article.title}</i> currently has
              <strong> {article.comment_count} </strong>
              comments
            </p>
            {loggedIn.username ? (
              <div>
                <p>
                  Logged in as <strong> {loggedIn.username}</strong>
                </p>
                <form action="">
                  <label htmlFor="body">Your comment: </label>
                  <input type="text" onChange={this.handleChange} />
                  <button
                    disabled={!this.state.body}
                    onClick={this.handleClick}
                  >
                    Post
                  </button>
                </form>
                {success && (
                  <div>
                    <h2>Comment Posted</h2>
                    {
                      <p>
                        {loggedIn.username} commented "{body}" on{" "}
                        {article.title} at{" "}
                      </p>
                    }
                  </div>
                )}
              </div>
            ) : (
              <p>Please log in to post a comment</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default PostComment;
