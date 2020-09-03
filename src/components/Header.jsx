import React from "react";
import Nav from "./Nav";
const Header = (props) => {
  return (
    <div>
      <header>
        <h1>NC-News</h1>
        <Nav loggedIn={props.logger} />
      </header>
    </div>
  );
};

export default Header;
