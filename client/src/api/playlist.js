import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/playlist/' })

export const getAllPlaylist = () => API.get('/')