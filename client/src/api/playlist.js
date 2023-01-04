import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/playlists/' })

export const getPlaylist = (id) => API.get(`/${id}`)
export const getAllPlaylist = () => API.get('/')