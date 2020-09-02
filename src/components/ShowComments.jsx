import React, { Component } from "react";
import * as api from "../utils/api";
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
            <button onClick={this.hideComments} value="Hide Comments">
              Hide Comments
            </button>
          )}
        </div>

        {this.state.seeComments && (
          <div>
            <ul>
              {" "}
              {comments.map((comment) => {
                return <li key={comment.comment_id}>{comment.body}</li>;
              })}
            </ul>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default ShowComments;
