import axios from "axios";

const apiKey = {
  articleSearch: function(topic, startYear, endYear) {
    const authKey = "a1c500d9701c4b45ad7dcfaf9f140e66";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },

  getArticle: function() {
    return axios.get("/api/saved");
  },

  saveArticle: function(data) {
    return axios.post("/api/saved", data);
  },
  
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default apiKey;