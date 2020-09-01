import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
class AuthorFilter extends Component {
  state = {
    users: [],
    clicked: false,
  };

  fetchAuthors = () => {
    api.getAuthors().then((users) => {
      this.setState({ users });
    });
  };

  handleChange = (changeEvent) => {
    this.setState({ user: changeEvent.target.value });
  };
  handleClick = (event) => {
    this.setState({ clicked: !this.state.clicked });
    event.preventDefault();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      const authorName = this.state.user;
      this.props.isAuthor(authorName);
    }
  }
  componentDidMount() {
    this.fetchAuthors();
  }
  render() {
    const { clicked, users } = this.state;
    return (
      <div>
        <form action="" onChange={this.handleChange}>
          {!clicked && (
            <button htmlFor="authors" onClick={this.handleClick}>
              Authors
            </button>
          )}

          {clicked &&
            users.map(({ username }) => {
              return (
                <Link
                  to={`/articles/authors/${username}`}
                  key={`${username}`}
                  value={`${username}`}
                >
                  <button>{`${username}`}</button>
                </Link>
              );
            })}
        </form>
      </div>
    );
  }
}

export default AuthorFilter;
