import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/artists/` })

export const getArtists = (limit) => API.get(`/q/${limit}`)
export const getArtistById = (id) => API.get(`/id/${id}`)
export const createArtist = (data) => API.post(`/create`, data)