import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/artists/` })

export const getArtist = (id) => API.get(`/${id}`)