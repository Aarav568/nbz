import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/beats/` })

export const getBeats = (route, id) => API.get(`/${route}/${id}`)
export const createBeat = (data) => API.post("/create", data)

