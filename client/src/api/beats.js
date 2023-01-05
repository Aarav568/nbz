import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/beats/' })

export const getBeats = (route, id) => API.get(`/${route}/${id}`)
export const saveBeatSample = (data) => API.post("/sample/save", data)
export const getBeatSample = (id) => API.get(`/sample/${id}`)