import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import UserInfo from "./UserInfo";

class LogIn extends Component {
  state = {
    isLoading: true,
    users: [],
    user: {},
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
  setUserLogin = (event) => {
    const { avatar_url, name, username } = this.state.user;
    localStorage.setItem("username", username);
    localStorage.setItem("name", name);
    localStorage.setItem("avatar_url", avatar_url);

    this.setState({ loggedIn: this.state.user });

    event.preventDefault();
  };

  logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("avatar_url");

    this.setState({ loggedIn: this.props.loggedIn, user: this.props.loggedIn });
  };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users, user, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : user.name ? (
          <div className="mainUser">
            <h2>Username: {user.username}</h2>
            <h3>Name: {user.name}</h3>
            <img
              className="avatarPics"
              src={user.avatar_url}
              alt={`${user.username}'s avatar`}
            />
            <form>
              <button onClick={this.setUserLogin}>
                Login as {user.username}
              </button>
              <button onClick={this.logOut}>Log Out</button>
            </form>
            <UserInfo username={user.username} />
          </div>
        ) : (
          <div className="mainUser">
            <h2>Pick a user</h2>
          </div>
        )}
        <ul>
          {users.map((user) => {
            return (
              <li key={user.username} className="userlist">
                <button
                  onClick={() => {
                    this.setState({ user: user });
                  }}
                >
                  <h4>Username: {user.username}</h4>

                  <img
                    className="avatarPics"
                    src={user.avatar_url}
                    alt={`${user.username}'s avatar`}
                  />
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
