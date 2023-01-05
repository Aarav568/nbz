import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/checkout/' })

export const checkout = (data) => API.post(`/`, data)