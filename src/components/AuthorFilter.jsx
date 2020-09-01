import React, { Component } from "react";
import * as api from "../utils/api";

class AuthorFilter extends Component {
  state = {
    users: [],
  };

  fetchAuthors = () => {
    api.getAuthors().then((users) => {
      this.setState({ users });
    });
  };

  handleChange = (changeEvent) => {
    this.setState({ user: changeEvent.target.value });
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
    return (
      <div>
        <form action="" onChange={this.handleChange}>
          {/* change this to use Link */}
          <label htmlFor="users">Author: </label>
          <select name="users" id="users">
            <option value="">all</option>
            {this.state.users.map((user) => {
              return (
                <option
                  key={`${user.username}`}
                  value={`${user.username}`}
                >{`${user.username}`}</option>
              );
            })}
          </select>
        </form>
      </div>
    );
  }
}

export default AuthorFilter;
