import axios from "axios";

const HOST_URL = import.meta.env.VITE_PRODUCTION_URL
const REST_API_BASE_URL =HOST_URL+'/api/stats'; //configure as needed

export const updateViewCount = () => {
    axios.patch(REST_API_BASE_URL + "/update/views")

}
export const updateDate = () => {
    axios.patch(REST_API_BASE_URL + "/update/last_updated")
}
export const getStats = () => {
    return axios.get(REST_API_BASE_URL + "/get")
}

