import { List, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ArtistHeader from "../../components/ArtistHeader/artist-header.component";
import BeatItem from "../../components/BeatItem/beat-item.component";

const Discover = () => {
    const [artist, setArtist] = useState(null)
    const params = useParams()
    const artists = useSelector(state => state.homepage.artists)
    useEffect(() => {
        artists.map(e => e._id.toString() === params.id.toString() ? setArtist(e) : null)
    }, [])
    return (
        <Box sx={{ minHeight: '100vh' }} m={0} flex={4} p={2}  >
            <ArtistHeader cover={artist?.img} artist title={artist?.name} />
            <List>
                {
                    artist?.beats.map(e =>
                        <BeatItem title={e.name} key={e._id} />
                    )
                }
            </List>
        </Box>
    );
}

export default Discover;