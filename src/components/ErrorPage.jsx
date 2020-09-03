import React, { Component } from "react";
// import Err from "./Err";
class ErrorPage extends Component {
  state = { info: null, err: null };
  componentDidMount = (err) => {
    if (window.history.state)
      this.setState({ err: window.history.state.ErrorMessage.toString() });
  };

  render() {
    const { err } = this.state;
    if (err)
      return (
        <div>
          <h1>Sorry, something's not quite right :(</h1>
          <h2>{err}</h2>
        </div>
      );
    return (
      <div>
        {" "}
        <h1>404 Path Not Found</h1>{" "}
      </div>
    );
  }
}

export default ErrorPage;
