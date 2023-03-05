import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/playlists/` })

export const getPlaylist = (id) => API.get(`/${id}`)
export const getAllPlaylists = (limit) => API.get(`/q/${limit}`)
export const createPlaylist = (data) => API.post("/create", data)
export const setPlaylistFeatured = (id) => API.post("/featured", id)
