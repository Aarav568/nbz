import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/search` })

export const searchGenre = (q) => API.get(`/genre/${q}`)
export const searchArtist = (q) => API.get('/artist/', { q })
export const searchBeat = (q) => API.get('/beat/', { q })