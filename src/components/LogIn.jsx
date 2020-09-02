import React, { Component } from "react";
import * as api from "../utils/api";

class LogIn extends Component {
  state = {
    isLoading: true,
    users: [],
    user: {},
  };
  fetchUsers = () => {
    api.getAuthors().then((users) => {
      this.setState({ users });
    });
  };
  oneUser = () => {
    const { users, user } = this.state;
    const one = users.filter((person) => {
      return person.username === user.username;
    });
    this.setState({ user: one });
  };

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users, user } = this.state;
    return (
      <div>
        <div className="mainUser">
          <h2>Username: {user.username}</h2>
          <h3>Name: {user.name}</h3>{" "}
          <img
            className="avatarPics"
            src={user.avatar_url}
            alt={`${user.username}'s avatar`}
          />
        </div>
        <ul>
          {" "}
          {users.map((user) => {
            return (
              <li key={user.username} className="userlist">
                {" "}
                <button>
                  <h4>Username: {user.username}</h4>
                  <h5>Name: {user.name}</h5>{" "}
                  <img
                    className="avatarPics"
                    src={user.avatar_url}
                    alt={`${user.username}'s avatar`}
                  />{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LogIn;
