import { List, ListItem, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <Paper>
            <Container>
                <List>
                    <ListItem>Contact us at :</ListItem>
                    <ListItem>
                        <Box>
                            <Typography>nashask.beats@gmail.com</Typography>
                            <Typography>+91 9654992192</Typography>
                        </Box>
                    </ListItem>
                </List>
                <List>
                    <ListItem><Typography fontWeight={'800'} >Nashak Beats</Typography></ListItem>
                    <ListItem>
                        <Box>
                            <Typography>Free For Profit Beats</Typography>
                            <Typography>Pricing</Typography>
                            <Typography>About Us</Typography>
                        </Box>
                    </ListItem>
                </List>
                <List>
                    <ListItem><Typography fontWeight={'800'} >Social Media</Typography></ListItem>
                    <ListItem>
                        <InstagramIcon sx={{mr: 1}} />
                        <Typography>Instagram</Typography>
                    </ListItem>
                    <ListItem>
                        <YouTubeIcon sx={{mr: 1}} />
                        <Typography>Youtube</Typography>
                    </ListItem>
                    <ListItem>
                        <FacebookIcon sx={{mr: 1}} />
                        <Typography>Facebook</Typography>
                    </ListItem>
                </List>
            </Container>
        </Paper>
    )
}

export default Footer