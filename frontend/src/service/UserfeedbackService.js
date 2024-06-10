import axios from "axios";
const HOST_URL = import.meta.env.VITE_PRODUCTION_URL
const REST_API_BASE_URL = HOST_URL+'/api/users'; //configure as needed

export const listAllRatings = () => {
    return axios.get(REST_API_BASE_URL + "/rating");
}
export const getAvrgCountRatings = () => { 
    return axios.get(REST_API_BASE_URL + "/rating/avg+count");
}

export const postUserFeedback = (userFeedback) => axios.post(REST_API_BASE_URL, userFeedback);
