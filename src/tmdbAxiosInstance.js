//Axios is a react library for API call promise-based HTTP Client for browser and node

import axios from "axios";

//it use instance for accessing base url
const tmdbAxiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})


export default tmdbAxiosInstance;