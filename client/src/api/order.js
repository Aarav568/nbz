import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/orders/' })
//HEADER AUTHORIZATION
API.interceptors.request.use((req) => {
    const isUserStored = Boolean(localStorage.getItem('persist:root'))
    if (isUserStored) {
        const storedUser = localStorage.getItem('persist:root')
        const storedToken = JSON.parse(JSON.parse(storedUser).user).token
        req.headers.authorization = `Bearer ${storedToken}`
    }
    return req
})

export const checkout = (data) => API.post(`/checkout`, data)
export const getAllOrders = (id) => API.get(`/${id}`)