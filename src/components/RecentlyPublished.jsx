import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class RecentlyPublished extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  FetchArticles = () =>
    api.getAllArticles().then((articles) => {
       const article = articles[0];
       
      this.setState({ article, isLoading: false });
    }).catch(()=>this.setState({err: true,  isLoading: false }))

  componentDidMount() {
    this.FetchArticles();
  }
  render() {
    const {article, isLoading,err}  = this.state
    const { title, article_id } = article;
    return (
      <div>
        {isLoading ? (
          <p>Loading ...</p> 
        ) : err ? (
  
        <p> Sorry, something's wrong on our end.</p>
        
        ): (
          <div>
            <Link to={`/article/${article_id}`}>
              <button className="articleshow" article_id={article_id}>
                <strong> Recently Published: </strong> <i> {title}</i>
              </button>
            </Link>
          </div>
        ) 
      
        }
      </div>
    );
  }
}

export default RecentlyPublished;
