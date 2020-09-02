import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

// import Loader from "./Loader";
class ShowComments extends Component {
  state = {
    comments: [],
    seeComments: false,
  };
  fetchComments = (article_id) => {
    api.getCommentsOfArticle(article_id).then((comments) =>
      this.setState((currentState) => {
        return { comments: comments, seeComments: !this.state.seeComments };
      })
    );
  };

  handleChange = () => {
    this.fetchComments(this.props.id);
  };

  hideComments = () => {
    this.setState((currentState) => {
      return { seeComments: !this.state.seeComments };
    });
  };

  render() {
    const { comments, seeComments } = this.state;
    return (
      <div>
        <div>
          {!seeComments && (
            <button onClick={this.handleChange} value="Show Comments">
              Show Comments
            </button>
          )}
          {seeComments && (
            <div>
              <button onClick={this.hideComments} value="Hide Comments">
                Hide Comments
              </button>
              <Link
                comments={comments}
                to={`/article/${this.props.id}/comments`}
              >
                <button>Show comment details</button>
              </Link>
              <Link to={`/article/${this.props.id}/comment`}>
                <button>Post a comment</button>
              </Link>
            </div>
          )}
        </div>

        {this.state.seeComments && (
          <div>
            <ol className="smallCommentsList">
              {comments.map((comment) => {
                return <li key={comment.comment_id}>{comment.body}</li>;
              })}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default ShowComments;
