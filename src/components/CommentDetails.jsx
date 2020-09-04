import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Loader from "./Loader";
import RatingButton from "./RatingButton";
import { formatDate } from "../utils/util_funcs";
class CommentDetails extends Component {
  state = { comments: [], isLoading: true };
  fetchComments = (article_id) => {
    api.getCommentsOfArticle(article_id).then((comments) =>
      this.setState((currentState) => {
        return { comments: comments, isLoading: !this.state.isLoading };
      })
    );
  };
  removeComment = (comment_id) => {
    api.deleteComment(comment_id);
    this.setState((currentState) => {
      const missingComments = this.state.comments.filter(
        (comment) => comment.comment_id !== comment_id
      );
      return { comments: missingComments };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments === this.state.comments) {
      this.fetchComments(this.props.article_id);
    }
  }
  componentDidMount() {
    this.fetchComments(this.props.article_id);
  }
  render() {
    const { username } = this.props.loggedIn;
    const { comments, isLoading } = this.state;
    return (
      <div>
        <Link to={`/article/${this.props.article_id}`}>
          <button>Back to Article</button>
        </Link>
        <Link to={`/article/${this.props.article_id}/comment`}>
          <button>Post a comment</button>
        </Link>
        {isLoading && <Loader />}
        <ol className="bigCommentsList">
          {comments.map((comment) => {
            return (
              <li className="greeting" key={comment.comment_id}>
                <p>
                  <i> {comment.body} </i>
                </p>
                <h5>
                  Comment made by {comment.author} on{" "}
                  {formatDate(comment.created_at)}
                </h5>
                <div className="ratingButton">
                  {username && comment.author !== username && (
                    <RatingButton
                      id={comment.article_id}
                      votes={comment.votes}
                    />
                  )}
                  {!username && (
                    <h6>
                      Please log in to rate comments or change your own comments
                    </h6>
                  )}
                  {comment.author === username && (
                    <div>
                      <p id="cannotrate">You cannot rate your own comments</p>
                      <button
                        onClick={() => {
                          this.removeComment(comment.comment_id);
                        }}
                      >
                        Remove your comment
                      </button>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default CommentDetails;
