import React, { Component } from "react";

import * as api from "../utils/api";
class RatingButton extends Component {
  state = {
    changeCount: Number(localStorage.getItem("changeCount")),
    count: 0,
  };
  changeVote = (count) => {
    api.updateVotes(this.props.article_id, count);
  };

  handleClick = ({ target: { value } }) => {
    const count = value === "yes" ? 1 : -1;

    this.setState((currentState) => {
      return {
        changeCount: currentState.changeCount + count,
        count,
      };
    });
    api.updateVotes(this.props.id, count);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.changeCount !== this.state.changeCount) {
      localStorage.setItem("changeCount", this.state.changeCount);
      this.setState({
        changeCount: Number(localStorage.getItem("changeCount")),
      });
    }
  };
  componentDidMount = () => {
    localStorage.setItem("changeCount", 0);
  };

  render() {
    return (
      <div className="userlist">
        <p> Like?</p>
        <button
          value="yes"
          onClick={this.handleClick}
          disabled={this.state.changeCount === 1}
        >
          yes :)
        </button>
        <button
          value="no"
          onClick={this.handleClick}
          disabled={this.state.changeCount === -1}
        >
          no :(
        </button>
        <h5>Current Rating {this.props.votes + this.state.count}</h5>
        <div>
          {" "}
          {this.state.changeCount === 1 ? (
            <div>
              <img
                className="emoji"
                src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_grande.png?v=1571606036"
                alt="happy"
              />
            </div>
          ) : this.state.changeCount === -1 ? (
            <div>
              <img
                className="emoji"
                src="https://i.pinimg.com/originals/32/3e/3b/323e3b47f07fa1fb0a4b2ecb03b2c965.png"
                alt="sad"
              />
            </div>
          ) : (
            <div>
              <img
                className="emoji"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2d0XHO-9mWK20TFIBtx68ibt5EI9tgLbkeA&usqp=CAU"
                alt="nuetral"
              />
            </div>
          )}{" "}
        </div>
      </div>
    );
  }
}

export default RatingButton;
