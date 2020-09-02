import React from "react";
import { Link } from "@reach/router";

const OrderBy = (props) => {
  const { order } = props;
  return (
    <div>
      <div className="sortchoices">
        <Link to={`/articles/sort/created_at/${order}`}>
          {" "}
          <button>Date Posted</button>{" "}
        </Link>
        <Link to={`/articles/sort/author/${order}`}>
          {" "}
          <button>Author</button>{" "}
        </Link>
        <Link to={`/articles/sort/title/${order}`}>
          {" "}
          <button>Title</button>{" "}
        </Link>
        <Link to={`/articles/sort/votes/${order}`}>
          {" "}
          <button>Rating</button>{" "}
        </Link>
      </div>
      {/* <div className="asc/desc">
          {this.state.order === "desc" ? (
            <button
              onClick={() => {
                this.setState({ order: "asc" });
              }}
              id="asc"
            >
              ↑
            </button>
          ) : (
            <button
              onClick={() => {
                this.setState({ order: "desc" });
              }}
              id="desc"
            >
              ↓
            </button>
          )}
        </div> */}
    </div>
  );
};

export default OrderBy;
