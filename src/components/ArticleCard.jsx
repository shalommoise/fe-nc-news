import React from "react";
import { formatDate } from "../utils/util_funcs";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  return (
    <div>
      <div className="main">
        <h3 id="title">{props.article.title}</h3>
        <p id="author">By: {props.article.author}</p>
        <p id="topic">Topic: {props.article.topic}</p>
      </div>
      <div className="comments">
        <p id="created_at">
          Published on: {formatDate(props.article.created_at)}
        </p>
        <p id="votes">
          Rating: {props.article.votes} comments: {props.article.comment_count}
        </p>
        <Link to={`/article/${props.article.article_id}`}>
          <button
            id="view_article_button"
            article_id={props.article.article_id}
          >
            View Article
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
