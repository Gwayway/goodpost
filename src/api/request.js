import axios from "axios";
const requests = axios.create({
    baseURL: "", //从
    timeout: 3000
});
requests.interceptors.request.use((config) => {
    return config;
});
requests.interceptors.response.use((res) => {
    return res;
}, (err) => {
    return Promise.reject(new Error(err));
})
export default axios;