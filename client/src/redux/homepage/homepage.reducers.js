import { HomepageTypes } from "./homepage.types";

const INITIAL_STATE = {
    artists: [],
    playlists: [],
    featured: []
}

const HomePageReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case HomepageTypes.GET_HOMEPAGE_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
} 

export default HomePageReducer