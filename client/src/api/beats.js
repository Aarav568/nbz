import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api/beats/' })

export const getBeats = (route, id) => API.get(`/${route}/${id}`)
export const getSampleBeat = (id) => API.get(`/sample/${id}`)