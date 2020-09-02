import axios from "axios";

export const getAllArticles = (topic, author, sort_by, order) => {
  console.log(order);
  return axios
    .get("https://nc-news-shalom.herokuapp.com/api/articles", {
      params: { topic, author, sort_by, order },
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

export const getAuthors = () => {
  return axios
    .get("https://nc-news-shalom.herokuapp.com/api/users")
    .then((users) => {
      return users.data.users;
    });
};

export const getSingleArticle = (article_id) => {
  return axios
    .get(`https://nc-news-shalom.herokuapp.com/api/articles/${article_id}`)
    .then((article) => {
      return article.data.article.article;
    });
};

export const updateVotes = (article_id, count) => {
  return axios.patch(
    `https://nc-news-shalom.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: count }
  );
};

export const getCommentsOfArticle = (article_id) => {
  return axios
    .get(
      `https://nc-news-shalom.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments.comments;
    });
};
