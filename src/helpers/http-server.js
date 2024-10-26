import axios from 'axios'
export const API_SERVER = axios.create({
    baseURL: 'http://localhost:3001'
})