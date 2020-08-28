import React, { Component } from "react";
import * as api from "../utils/api";

class TopicFilter extends Component {
  state = {
    topics: [],
  };

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
  handleChange = (changeEvent) => {
    this.setState({ topic: changeEvent.target.value });
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
    return (
      <div>
        <form action="" onChange={this.handleChange}>
          <label htmlFor="topics">Topic: </label>
          <select name="topics" id="topics">
            <option value="">all</option>
            {this.state.topics.map((topic) => {
              return (
                <option
                  key={`${topic.slug}`}
                  value={`${topic.slug}`}
                >{`${topic.slug}`}</option>
              );
            })}
          </select>
        </form>
      </div>
    );
  }
}

export default TopicFilter;
