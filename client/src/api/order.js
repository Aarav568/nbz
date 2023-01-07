import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/orders/' })

export const checkout = (data) => API.post(`/checkout`, data)
export const getAllOrders = (id) => API.get(`/${id}`)