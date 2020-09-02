import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class LogIn extends Component {
  state = {
    isLoading: true,
    users: [],
    user: this.props.logged,
    loggedIn: {},
  };
  fetchUsers = () => {
    api.getAuthors().then((users) => {
      this.setState({ users, isLoading: false });
    });
  };
  pickUser = () => {
    const { users, user } = this.state;
    const one = users.filter((person) => {
      return person.username === user.username;
    });
    this.setState({ user: one });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn.name !== this.state.loggedIn.name) {
      const logger = this.state.loggedIn;
      this.props.logged(logger);
    }
  }
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users, user, isLoading } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
        {user.name && (
          <div className="mainUser">
            <h2>Username: {user.username}</h2>
            <h3>Name: {user.name}</h3>{" "}
            <img
              className="avatarPics"
              src={user.avatar_url}
              alt={`${user.username}'s avatar`}
            />
            <button
              onClick={() => {
                this.setState({ loggedIn: user });
              }}
            >
              Login as {user.username}
            </button>
          </div>
        )}
        <ul>
          {" "}
          {users.map((user) => {
            return (
              <li key={user.username} className="userlist">
                {" "}
                <button
                  onClick={() => {
                    this.setState({ user: user });
                  }}
                >
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
