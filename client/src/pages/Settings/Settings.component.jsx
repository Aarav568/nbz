import { Stack, Box, Grid, TextField, Paper, Typography, Switch, List } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ArtistHeader from "../../components/ArtistHeader/artist-header.component";
import BeatItem from "../../components/BeatItem/beat-item.component";


const Settings = () => {
    const [playlist, setPlaylist] = useState(null)
    const params = useParams()
    const playlists = useSelector(state => state.homepage.playlists)
    useEffect(() => {
        playlists.map(e => e._id.toString() === params.id.toString() ? setPlaylist(e) : null)
    }, [])
    return(
        <Box sx={{ minHeight: '100vh' }} m={0} flex={4} p={2}  >
            <ArtistHeader cover={playlist?.img} title={playlist?.name} />
            <List>
                {
                    playlist?.beats.map(e => (
                        <BeatItem title={e.name} key={e._id} />
                    ))
                }
            </List>
        </Box>
    )
}

export default Settings;