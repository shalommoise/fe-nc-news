import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Filter extends Component {
  state = {
    topics: [],
    topic: "",
  };

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
      console.log(this.state);
    });
  };
  handleChange = (changeEvent) => {
    this.setState({ topic: changeEvent.target.value });
  };

  componentDidUpdate(prevProps, prevState) {}
  componentDidMount() {
    this.fetchTopics();
  }
  render() {
    return (
      <div>
        <form action="" onChange={this.handleChange}>
          <label htmlFor="Topics">Topic</label>
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
          <Link to={`/articles/${this.state.topic}`}>
            <button onClick={this.chooseTopic}>Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Filter;
