import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api/stats';

export const updateViewCount = () => {
    axios.patch(REST_API_BASE_URL + "/update/views")
}
export const updateDate = () => {
    axios.patch(REST_API_BASE_URL + "/update/last_updated")
}
export const getStats = () => {
    axios.get(REST_API_BASE_URL + "/get")
}

