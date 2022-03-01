import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "";

export const publicRequest = axios.create({
    baseURL: VASE_URL
})