import React from "react";
import { Link } from "@reach/router";

const Gallery = () => {
  return (
    <div className="gallery">
      <Link to="/articles/topics/coding">
        <img
          className="topic-images"
          id="codingimage"
          src="https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=6&m=1047259374&s=612x612&w=0&h=nG_krpdg_SonwCnxIOYShVLEidbLvukG9YrBUsRqVEQ="
          alt="Coding Topics"
        />
      </Link>
      <Link to="/articles/topics/cooking">
        <img
          className="topic-images"
          src="https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2020/08/Vegetables-in-wok-615x369.jpg"
          alt="cooking topics"
        />
      </Link>
      <Link to="/articles/topics/football">
        <img
          className="topic-images"
          src="https://tbrfootball.com/static/uploads/27/2020/07/GettyImages-1253719881-400x240.jpg"
          alt="football topics"
        />{" "}
      </Link>
    </div>
  );
};

export default Gallery;
