import React from "react";
import { Link } from "@reach/router";

const OrderBy = (props) => {
  const { order, author, topic } = props;
  const isTopic = topic ? `topics/${topic}/` : "";
  const isAuthor = author ? `authors/${author}/` : "";
  const filter = isTopic ? isTopic : isAuthor;

  return (
    <div>
      <div className="sortchoices">
        <Link to={`/articles/sort/created_at/${order}/${filter}`}>
          <button className="orderbuttons">
            <p> Date Posted </p>
          </button>
        </Link>
        <Link to={`/articles/sort/author/${order}/${filter}`}>
          <button className="orderbuttons">
            <p> Author </p>
          </button>
        </Link>
        <Link to={`/articles/sort/title/${order}/${filter}`}>
          <button className="orderbuttons">
            <p>Title</p>
          </button>
        </Link>
        <Link to={`/articles/sort/votes/${order}/${filter}`}>
          <button className="orderbuttons">
            <p> Rating </p>
          </button>
        </Link>
        <Link to={`/articles/sort/comment_count/${order}/${filter}`}>
          <button className="orderbuttons">
            <p> Comments </p>
          </button>
        </Link>
        <Link to="/articles">
          <button className="orderbuttons">
            <p> Reset </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderBy;
