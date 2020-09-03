import React, { Component } from "react";
import { Link } from "@reach/router";
class Nav extends Component {
  render() {
    const { username, avatar_url } = this.props.loggedIn;
    return (
      <div className="mainNavBar">
        <Link to="/">
          <button className="navButton">
            {" "}
            <p>Home </p>
          </button>
        </Link>
        <Link to="/articles">
          <button className="navButton">
            {" "}
            <p>Articles</p>
          </button>
        </Link>
        <Link to="/account">
          <button className="navButton">
            {!username ? (
              <p> Log in</p>
            ) : (
              <div>
                <p>{username}</p>{" "}
                <img
                  className="smallicon"
                  src={avatar_url}
                  alt={username}
                  hidden
                />
              </div>
            )}
          </button>
        </Link>
      </div>
    );
  }
}

export default Nav;
