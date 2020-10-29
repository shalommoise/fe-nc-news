import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
class UserInfo extends Component {
  state = { articles: [], comments: [] };

  fetchArticle = () =>
    api
      .getAllArticles(null, this.props.username, null, null)
      .then((articles) => {
        this.setState({ articles: articles });
      });
fetchComments =()=>{

  api.getAllComments().then((comments)=>{

let userComments =[]
 comments.forEach((comment)=>{
       if(comment.author === this.props.username) userComments.push(comment);
 
    })
    this.setState({comments: userComments})
  })
}
  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.username !== this.props.username) {
      this.fetchArticle();
        this.fetchComments();
    }
  }
  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }

  render() {
    const {articles, comments} = this.state;

    return (
      <div>
        <p>written {articles.length} articles and {comments.length} comments</p>
    <Link to={`/articles/authors/${this.props.username}`}> <button>
    See {this.props.username}'s Articles </button></Link>
      </div>
    );
  }
}

export default UserInfo;
