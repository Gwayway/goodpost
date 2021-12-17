import axios from "axios";
const requests = axios.create({
    baseURL: "http://wy.mideadc.com/charging-api/rest-api/v1/midea", 
    timeout: 3000,
    headers:{'Content-Type':'application/json'}
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