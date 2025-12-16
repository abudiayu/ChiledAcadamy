// // import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6",
// });
// export { axiosInstance }
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY, // Ensure this matches .env
    language: 'en-US'
  }
});