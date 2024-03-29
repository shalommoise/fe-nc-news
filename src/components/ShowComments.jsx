import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

import Loader from "./Loader";
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

  handleClick = () => {
    this.fetchComments(this.props.id)
  };

  hideComments = () => {
    this.setState((currentState) => {
      return { seeComments: !this.state.seeComments };
    });
  };

  render() {
    const { comments, seeComments } = this.state;
    return (
      <div className="commentButton">
        <div>
          {!seeComments && (
            <button onClick={this.handleClick} value="Show Comments">
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
            </div>
          )}
        </div>

        {this.state.seeComments && (
          <div>
            {!comments.length ? (
                 <Loader/>
            ): 
            <ol className="smallCommentsList">
              {comments.map((comment) => {
                return (
                  <li className="smallCommentsList" key={comment.comment_id}>
                    {comment.body}
                  </li>
                );
              })}
            </ol>}
          </div>
        )}
      </div>
    );
  }
}

export default ShowComments;
