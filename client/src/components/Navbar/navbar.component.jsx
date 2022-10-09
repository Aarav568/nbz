import { AppBar, Grid, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu, Button, MenuList, List, ListItem, Divider, ListItemText, ListItemAvatar, IconButton, Toolbar, ListItemButton, Drawer } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StyledToolbar, UserBox, Search, Icons } from './navbar.styled';
import { setCurrentUser } from "../../redux/user/user.actions";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Stack } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const theme = useSelector(state => state.theme.mode)
    const [avatarAnchor, setAvatarAnchor] = useState(null)
    const [notificationAnchor, setNotificationAnchor] = useState(null)
    const logout = () => {
        localStorage.clear()
        dispatch(setCurrentUser({ user: null, token: null }))
        navigate('/login')
    }
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
            <Typography variant="h6" sx={{ my: 2, }}>
                Nashak-Beats
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Offers"} />
                        <LocalOfferIcon />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Shop"} />
                        <ShoppingCartIcon />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Custom Beats"} />
                        <AudiotrackIcon />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"My Orders"} />
                        <ShoppingBagIcon />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );
    return (
        <AppBar position="sticky" sx={{ bgcolor: "#1DB954" }} >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton size='large' edge='start' color='inherit' onClick={() => navigate('/')} >
                    <HeadphonesIcon />
                </IconButton>
                <Typography variant='h5' sx={{ flexGrow: 1 }} />
                {
                    !currentUser ? (
                        <>
                            <Stack spacing={2} direction={'row'} >
                                <Button variant="contained" color="warning" onClick={() => navigate('/login')}>Login</Button>
                                <Button variant="contained" color="error" onClick={() => navigate('/signup')} >Sign Up</Button>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Badge badgeContent={3} color="error" sx={{ mr: 2 }} >
                                <ShoppingCartIcon onClick={(e) => setNotificationAnchor(e.currentTarget)} />
                            </Badge>
                            {
                                currentUser.avatar ? (
                                    <IconButton onClick={(e) => setAvatarAnchor(e.currentTarget)}>
                                        <Avatar alt={currentUser.displayName} sx={{ width: 50, height: 50 }} src={currentUser.avatar} />
                                    </IconButton>
                                ) : (
                                    <IconButton onClick={(e) => setAvatarAnchor(e.currentTarget)}>
                                        <Avatar alt={currentUser.displayName} sx={{ width: 50, height: 50 }}>{currentUser.displayName.charAt(0)}</Avatar>
                                    </IconButton>
                                )
                            }
                            {/* --------------------------------------------MENU STUFF------------------------------------------ */}
                            <Menu
                                anchorEl={avatarAnchor}
                                onClose={() => setAvatarAnchor(null)}
                                open={Boolean(avatarAnchor)}
                            >
                                <MenuItem onClick={() => navigate('/profile')} >Profile</MenuItem>
                                <MenuItem onClick={logout} >Logout</MenuItem>
                            </Menu>
                            <Box component="nav">
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Box>
                        </>
                    )
                }
            </Toolbar>
        </AppBar >
    );
}

export default Navbar;

