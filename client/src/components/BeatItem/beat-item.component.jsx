import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const BeatItem = ({title}) => {
    return (
        <>
            <ListItem>
                <ListItemText secondary={title} />
                <ListItemAvatar>
                    <Stack direction="row" >
                        <ListItemButton>
                            <Avatar sx={{ width: 25, height: 25 }}  >
                                <PlayCircleFilledIcon />
                            </Avatar>
                        </ListItemButton>
                        <ListItemButton>
                            <Avatar sx={{ width: 25, height: 25 }}  >
                                <ShoppingCartIcon fontSize='10px' />
                            </Avatar>
                        </ListItemButton>
                    </Stack>
                </ListItemAvatar>
            </ListItem>
            <Divider variant="middle" />
        </>
    )
}

export default BeatItem