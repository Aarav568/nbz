import { Container } from "@mui/system";
import { Stack, Box, TextField, Typography, Button, MenuItem, Menu, Grid, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUser, followUser } from "../../api/user";
import Sidebar from "../../components/Sidebar/sidebar.component";
import { StyledAvatar } from "./user-profile.styled";
import { useSelector } from "react-redux";
import ImageSection from "../../components/ImageSection/image-section.component";
import { getPostByUser } from "../../api/post";

const UserProfile = () => {
    const params = useParams()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const currentUser = useSelector(state => state.user.currentUser)
    const isFollowed = () => {
        if (currentUser.following.findIndex(followingId => followingId.toString() === params.id) !== -1) {
            return true
        }
        return false
    }

    useEffect(() => {
        getUser(params.id).then(resp => setUser(resp.data))
        getPostByUser(params.id).then(resp => setPosts(resp.data))
    }, [])
    return (
        <Box flex={4} p={2} sx={{ width: '100vh', height: '95vh' }} >
            <Container sx={{ padding: '3%' }} maxWidth='sm' >
                <Stack spacing={5} >
                    <Grid container spacing={4} >
                        <Grid item >
                            {
                                user?.avatar ? (
                                    <StyledAvatar aria-label="recipe" src={user?.avatar} />
                                ) : (
                                    <StyledAvatar aria-label="recipe">
                                        {user?.displayName?.charAt(0)}
                                    </StyledAvatar>
                                )
                            }
                        </Grid>
                        <Grid item >
                            <Typography mb={2} variant='h5' >{user?.username}</Typography>
                            <Typography mb={2} variant='subtitle1' >{user?.displayName}</Typography>
                        </Grid>
                        <Grid item sx={{ color: "text.secondary" }} >
                            <ListItemButton >
                                <Typography variant='subtitle1' >Followers: {user?.followers?.length} </Typography>
                            </ListItemButton>
                            <ListItemButton>
                                <Typography variant='subtitle1' >Following: {user?.following?.length} </Typography>
                            </ListItemButton>
                        </Grid>
                    </Grid>
                    {
                        isFollowed() ? (
                            <Button variant="outlined" onClick={() => followUser(params.id)} >Unfollow</Button>
                        ) : (
                            <Button variant="contained" onClick={() => followUser(params.id)} >Follow</Button>
                        )
                    }
                </Stack>
                <ImageSection posts={posts} />
            </Container>
        </Box>
    )
}

export default UserProfile;
