import axios from 'axios';

const API_KEY = "3068c35fb6f543c7a3cfc285a735f5fa";
const instance = axios.create({
    baseURL : `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-12&sortBy=publishedAt&apiKey=${API_KEY}`
    
    
});

export default instance;