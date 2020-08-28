import axios from "axios";

export const getAllArticles = (topic, author) => {
  return axios
    .get("https://nc-news-shalom.herokuapp.com/api/articles", {
      params: { topic, author },
    })
    .then((articles) => {
      return articles.data.articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-shalom.herokuapp.com/api/topics")
    .then((topics) => {
      return topics.data.topics;
    });
};
