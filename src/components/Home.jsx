import React from "react";
import { Link } from "@reach/router";
import { whatTimeIsit } from "../utils/util_funcs";
import UserInfo from "./UserInfo";
import RecentlyPublished from "./RecentlyPublished";

const Home = (props) => {
  const title = localStorage.getItem("title");
  const author = localStorage.getItem("author");
  const article_id = localStorage.getItem("article_id");
  const { username, name, avatar_url } = props.logger;
  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("avatar_url");
  };
  return (
    <div>
      <div className="greeting">
        <p>
          {whatTimeIsit()}. Welcome to NC-News: the most anticipated blogging
          site for coders, cookers and footballers! Please have a look around,
          don't be shy :)
        </p>
        <p>Be sure to comment on your favourite articles and leave a like :)</p>{" "}
        {!username && <Link to="/account">Click here to log in</Link>}
        {username && (
          <div className="mainUser">
            <h3>Username: {username}</h3>
            <h4>Name: {name}</h4>
            <img
              className="avatarPics"
              src={avatar_url}
              alt={`${username}'s avatar`}
            />

            {<UserInfo username={username} />}

            <form>
              <button onClick={logOut}>Log Out</button>
            </form>
          </div>
        )}
        <Link to="/account"> </Link>
      </div>
      <div className="recentlyViewedArticle">
        <h2>Articles</h2>
        <ul>
          <li>
            <p>
              {" "}
              <strong> Recently Viewed: </strong>
              <i> {title} </i>By: {author}{" "}
              <Link to={`/article/${article_id}`}>
                <button article_id={article_id}>View Article</button>
              </Link>
            </p>
          </li>
          <li> {<RecentlyPublished />} </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
