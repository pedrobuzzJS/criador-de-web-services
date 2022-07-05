import axios from "axios";

const api = axios.create({
    baseURL: 'www.google.com',
})

export default api;