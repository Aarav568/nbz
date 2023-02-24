import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/artists/` })

export const getArtists = (limit) => API.get(`/${limit}`)
export const getArtistById = (id) => API.get(`/id/${id}`)