import React from "react";

const SearchError = (props) => {
  return (
    <div>
      {props.articles.length > 0 ? (
        <h2>Showing {props.articles.length} articles</h2>
      ) : (
        <div>
          <h2>Something is wrong</h2>
          {props.topic && (
            <p>
              Sorry, we do not have any articles about <i>{props.topic}</i>.
            </p>
          )}
          {props.author && (
            <p>
              Sorry, we do not have any articles written by
              <i>{props.author}</i>.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchError;
