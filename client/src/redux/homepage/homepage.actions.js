import { getAllArtists } from "../../api/artists";
import { getAllPlaylist } from "../../api/playlist";
import { HomepageTypes } from "./homepage.types";

export const getHomePageData = () => async (dispatch) => {
    try {
        const artists = await getAllArtists()
        const playlists = await getAllPlaylist()
        dispatch({
            type: HomepageTypes.GET_HOMEPAGE_DATA,
            payload: {
                artists: artists.data , 
                playlists: playlists.data 
            }
        })
    } catch (err) {
        console.log(err)
    }
}
