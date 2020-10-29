import React from "react";
import { Link } from "@reach/router";
import { whatTimeIsit } from "../utils/util_funcs";
import UserInfo from "./UserInfo";
import RecentlyPublished from "./RecentlyPublished";
import MostTalkedAbout from "./MostTalkedAbout";
import HighestRated from "./HighestRated";
import Gallery from "./Gallery";

const Home = (props) => {
  const title = localStorage.getItem("title");

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
        <p id="greeting">
          {whatTimeIsit()} and welcome to NC-News: the most anticipated blogging
          site for coders, cookers and footballers! Please have a look around,
          don't be shy :)
        </p>
        <p>Be sure to comment on your favourite articles and leave a like :)</p>{" "}
        {!username && (
          <Link to="/account">
            <button> Please Log in to enjoy the full experience </button>
          </Link>
        )}
        {username && (
          <div className="mainUser">
            <h3>
              Logged in as <i> {username}</i>
            </h3>
            <h5>
              Name: <i> {name} </i>{" "}
            </h5>
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
      <div className="mainUser">
        <h2>
          <u>Featured Articles </u>
        </h2>
        <ul className="featured">
          <Link to={`/article/${article_id}`}>
            <button className="articleshow" article_id={article_id}>
              <li>
                <strong> Recently Viewed: </strong>
                <i> {title} </i>
              </li>
            </button>
          </Link>
          <li> {<RecentlyPublished />} </li>
          <li>{<MostTalkedAbout />}</li>
          <li>{<HighestRated />}</li>
        </ul>
      </div>

      <Gallery />
    </div>
  );
};

export default Home;
