import React, { Component } from "react";

class AscDescButton extends Component {
  state = { order: this.props.order };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.order !== this.state.order) {
      const newOrder = this.state.order;
      this.props.isOrder(newOrder);
    }
  };
  render() {
    return (
      <div className="asc/desc">
        {this.props.order === "desc" ? (
          <button
            className="asc"
            onClick={() => {
              this.setState({ order: "asc" });
            }}
          >
            asc ↑
          </button>
        ) : (
          <button
            className="desc"
            onClick={() => {
              this.setState({ order: "desc" });
            }}
          >
            desc ↓
          </button>
        )}
      </div>
    );
  }
}

export default AscDescButton;
