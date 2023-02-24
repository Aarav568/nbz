import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/genres` })

export const getGenres = (limit) => API.get(`/${limit}`)
export const createGenre = (genre) => API.post('/create/', { genre })