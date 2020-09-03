import React from "react";
import { Link } from "@reach/router";

const OrderBy = (props) => {
  const { order } = props;
  return (
    <div>
      <div className="sortchoices">
        <Link to={`/articles/sort/created_at/${order}`}>
          <button className="orderbuttons">Date Posted</button>
        </Link>
        <Link to={`/articles/sort/author/${order}`}>
          <button className="orderbuttons">Author</button>
        </Link>
        <Link to={`/articles/sort/title/${order}`}>
          <button className="orderbuttons">Title</button>
        </Link>
        <Link to={`/articles/sort/votes/${order}`}>
          <button className="orderbuttons">Rating</button>
        </Link>
        <Link to={`/articles/sort/comment_count/${order}`}>
          <button className="orderbuttons">Number of comments</button>
        </Link>
        <Link to="/articles">
          <button className="orderbuttons">Reset</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderBy;
