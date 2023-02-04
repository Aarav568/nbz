import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/playlists/` })

export const getPlaylist = (id) => API.get(`/${id}`)
export const getAllPlaylist = () => API.get('/')