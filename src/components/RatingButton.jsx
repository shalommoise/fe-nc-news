import React, { Component } from "react";

class RatingButton extends Component {
  state = {
    changeCount: 0,
  };
  render() {
    return (
      <div>
        <p> Like this article?</p> <button>yes</button>
        <button>no</button>{" "}
      </div>
    );
  }
}

export default RatingButton;
