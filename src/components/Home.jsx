import React from "react";
import { Link } from "@reach/router";
import { whatTimeIsit } from "../utils/util_funcs";
import UserInfo from "./UserInfo";
import RecentlyPublished from "./RecentlyPublished";
import MostTalkedAbout from "./MostTalkedAbout";
import HighestRated from "./HighestRated";
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
        <p id="greeting">
          {whatTimeIsit()} and welcome to NC-News: the most anticipated blogging
          site for coders, cookers and footballers! Please have a look around,
          don't be shy :)
        </p>
        <p>Be sure to comment on your favourite articles and leave a like :)</p>{" "}
        {!username && (
          <Link to="/account">
            {" "}
            <button> Please Log in to enjoy the full experience </button>
          </Link>
        )}
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
            <strong> Recently Viewed: </strong>
            <i> {title} </i>By: {author}{" "}
            <Link to={`/article/${article_id}`}>
              <button article_id={article_id}>View Article</button>
            </Link>
          </li>
          <li> {<RecentlyPublished />} </li>
          <li>{<MostTalkedAbout />}</li>
          <li>{<HighestRated />}</li>
        </ul>
      </div>
      <div className="gallery">
        <Link to="/articles/topics/coding">
          {" "}
          <img
            className="topic-images"
            id="codingimage"
            src="https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=6&m=1047259374&s=612x612&w=0&h=nG_krpdg_SonwCnxIOYShVLEidbLvukG9YrBUsRqVEQ="
            alt="Coding Topics"
          />{" "}
        </Link>
        <Link to="/articles/topics/cooking">
          {" "}
          <img
            className="topic-images"
            src="https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2020/08/Vegetables-in-wok-615x369.jpg"
            alt="cooking topics"
          />{" "}
        </Link>
        <Link to="/articles/topics/football">
          {" "}
          <img
            className="topic-images"
            src="https://tbrfootball.com/static/uploads/27/2020/07/GettyImages-1253719881-400x240.jpg"
            alt="football topics"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
