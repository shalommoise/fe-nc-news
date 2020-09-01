import React, { Component } from "react";
import * as api from "../utils/api";
class ShowComments extends Component {
  state = {
    comments: [],
    seeComments: false,
  };
  fetchComments = (article_id) => {
    api
      .getCommentsOfArticle(article_id)
      .then((comments) => this.setState({ comments }));
  };

  showOrHide = ({ target: { value } }) => {
    if (this.state.seeComments === true) {
      this.fetchComments(this.props.id);
    }
    this.setState((currentState) => {
      return { seeComments: !this.state.seeComments };
    });
  };

  render() {
    const { comments, seeComments } = this.state;
    return (
      <div>
        <div>
          <button
            onClick={this.showOrHide}
            value={seeComments ? "Hide comments" : "Show Comments"}
          >
            {seeComments ? "Hide Comments" : "Show Comments"}
          </button>
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
