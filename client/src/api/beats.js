import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/beats/` })

export const getAllBeats = () => API.get(`/`)
export const getBeats = (route, id) => API.get(`/${route}/${id}`)
export const createBeat = (data) => API.post("/create", data)
export const setBeatFeatured = (id) => API.post("/featured", { id })
export const removeBeatFeatured = (id) => API.post("/featured/remove", { id })
