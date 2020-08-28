import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://nc-news-shalom.herokuapp.com/api/articles")
    .then((articles) => {
      return articles.data.articles;
    });
};
