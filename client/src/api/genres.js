import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/genres` })

export const getAllGenres = () => API.get(`/`)
export const getGenres = (limit) => API.get(`/q/${limit}`)
export const createGenre = (name) => API.post('/create', { name })