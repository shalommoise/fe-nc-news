import React, { Component } from "react";
import { Link } from "@reach/router";
class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/articles">
          <button>Articles</button>
        </Link>
        <Link to="/account">
          <button>
            {" "}
            {!this.props.loggedIn.name
              ? "Log in"
              : this.props.loggedIn.username}
          </button>
        </Link>
      </div>
    );
  }
}

export default Nav;
