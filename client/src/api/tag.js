import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/api/tags/` })

//HEADER AUTHORIZATION
API.interceptors.request.use((req) => {
    const isUserStored = Boolean(localStorage.getItem('persist:root'))
    if (isUserStored) {
        const storedUser = localStorage.getItem('persist:root')
        const storedToken = JSON.parse(JSON.parse(storedUser).user).token
        req.headers.authorization = `Bearer ${storedToken}`
    }
    return req
})


export const taggedBeats = (tag) => API.get(`/beat/${tag}`)
export const taggedPlaylist = (tag) => API.get(`/playlist/${tag}`)
export const taggedGenres = (tag) => API.get(`/genre/${tag}`)