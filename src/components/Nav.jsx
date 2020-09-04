import React from "react";
import { Link } from "@reach/router";
const Nav = (props) => {
  const { username, avatar_url } = props.loggedIn;
  return (
    <div className="mainNavBar">
      <Link to="/">
        <button className="navButton">
          <p>Home </p>
        </button>
      </Link>
      <Link to="/articles">
        <button className="navButton">
          <p>Articles</p>
        </button>
      </Link>
      <Link to="/account">
        <button className="navButton">
          {!username ? (
            <p> Log in</p>
          ) : (
            <div>
              <p>{username}</p>
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
};

export default Nav;
