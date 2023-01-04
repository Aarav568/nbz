import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/tags/' })

export const taggedArtist = (tag) => API.get(`/artist/${tag}`)
export const taggedPlaylist = (tag) => API.get(`/playlist/${tag}`)