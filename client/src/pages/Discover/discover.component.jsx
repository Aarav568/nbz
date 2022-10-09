import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ArtistHeader from "../../components/ArtistHeader/artist-header.component";
import BeatItem from "../../components/BeatItem/beat-item.component";
import { data } from "../../data/data";

const Discover = () => {
    return (
        <Box sx={{ minHeight: '100vh' }} m={0} flex={4} p={2}  >
            <ArtistHeader cover={data.featured[0]} artist title={"Kanye West"} />
            <List>
                {
                    data.kanye.map(e => (
                        <BeatItem title={e} key={e} />
                    ))
                }
            </List>
        </Box>
    );
}

export default Discover;