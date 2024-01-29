import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api/users';

export const listAllRatings = () => {
    return axios.get(REST_API_BASE_URL + "/all");

}
export const getAvrgRatings =() => {
    return axios.get(REST_API_BASE_URL + "/all/cal");

}