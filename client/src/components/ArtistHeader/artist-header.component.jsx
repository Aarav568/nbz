import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ArtistItem from "../../components/ArtistItem/artist-item.component";
import PlayListItem from "../PlaylistItem/playlist-item.component";

const ArtistHeader = ({ artist, cover, title }) => {
    return (
        <Stack direction="row" p={2} sx={{ bgcolor: '#313131' }} >
            {
                artist ? (
                    <ArtistItem img={cover} />
                ) : (
                    <PlayListItem img={cover} />
                )
            }
            
            <Box p={4}  >
                <Typography variant="h5" fontWeight={200} >{title}</Typography>
            </Box>
        </Stack>
    )
}

export default ArtistHeader