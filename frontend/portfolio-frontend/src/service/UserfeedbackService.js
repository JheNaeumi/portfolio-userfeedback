import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api/users';

export const listAllRatings = () => {
    return axios.get(REST_API_BASE_URL + "/rating");

}
export const postUserFeedback = (userFeedback) => axios.post(REST_API_BASE_URL, userFeedback);

export const getAvrgRatings = () => { 
    return axios.get(REST_API_BASE_URL + "/rating/avg");
}