// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741
const name = "saurav";
export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/plasticine/100/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/office/160/000000/mastercard.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/office/160/000000/film-soundtracks.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/office/160/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/office/160/000000/test-tube.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/office/160/000000/exercise.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/office/480/000000/robot-2.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
];
const surname = "tech";
export const BASE_URL = `https://${name}.${surname}/NewsAPI`;

export const getNewsAPI = (category, country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
