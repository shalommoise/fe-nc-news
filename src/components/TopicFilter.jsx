import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class TopicFilter extends Component {
  state = {
    topics: [],
    clicked: false,
  };

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
  handleChange = (changeEvent) => {
    this.setState({ topic: changeEvent.target.value });
  };
  handleClick = (event) => {
    this.setState({ clicked: !this.state.clicked });
    event.preventDefault();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.topic !== this.state.topic) {
      const topicSlug = this.state.topic;
      this.props.isTopic(topicSlug);
    }
  }
  componentDidMount() {
    this.fetchTopics();
  }
  render() {
    const { clicked, topics } = this.state;
    return (
      <div className="filterorder">
        <form action="" onChange={this.handleChange}>
          {!clicked && (
            <button htmlFor="topics" onClick={this.handleClick}>
              <p>Filter by Topic </p>
            </button>
          )}
          {clicked &&
            topics.map((topic) => {
              return (
                <Link
                  key={`${topic.slug}`}
                  to={`/articles/topics/${topic.slug}`}
                >
                  <button
                    className="topicsbutton"
                    key={`${topic.slug}`}
                    value={`${topic.slug}`}
                  >
                    <p>{`${topic.slug}`} </p>
                  </button>
                </Link>
              );
            })}
        </form>
      </div>
    );
  }
}

export default TopicFilter;
