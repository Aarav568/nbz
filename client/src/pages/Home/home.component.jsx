import { Button, FormControl, ImageList, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArtistItem from "../../components/ArtistItem/artist-item.component";
import PlayListItem from "../../components/PlaylistItem/playlist-item.component";
import Search from "../../components/Search/search.component";
import CreateIcon from '@mui/icons-material/Create';
import { data } from "../../data/data";
import { useNavigate } from "react-router";

const Home = () => {
    
    return (
        <Box sx={{ minHeight: '100vh' }} m={0} flex={4} p={2}  >
            <Search />
            <img style={{ marginTop: 14 }} src="https://ik.imagekit.io/xcuqahb2st38/asasasas_cWukludFt?ik-sdk-version=javascript-1.4.3&updatedAt=1664532792034" />
            <Box mt={2} gap={2} sx={{ display: "flex" }} alignItems="center" alignContent={"center"} justifyContent={"center"} >
                <Button variant="contained" sx={{ borderRadius: "20px", bgcolor: "#1DB954" }} >Explore</Button>
                <Button variant="contained" sx={{ borderRadius: "20px" }} >Pricing</Button>
            </Box>
            <Box sx={{ mt: 5 }}>
                <Typography>Featured</Typography>
                <Box sx={{ display: "grid" }} >
                    <ImageList
                        sx={{
                            gridAutoFlow: "column",
                            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                            gridAutoColumns: "minmax(160px, 1fr)"
                        }}
                    >
                        {
                            data.featured.map(e =>
                                <ArtistItem img={`${e}`} />
                            )
                        }
                    </ImageList>
                </Box>
                <Typography>Top Mixes</Typography>
                <Box sx={{ display: "grid" }} >
                    <ImageList
                        sx={{
                            gridAutoFlow: "column",
                            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                            gridAutoColumns: "minmax(160px, 1fr)"
                        }}
                    >
                        {
                            data.playlist.map(e =>
                                <PlayListItem img={`${e}`} />
                            )
                        }
                    </ImageList>
                </Box>
            </Box>
            <Box style={{ marginTop: 14 }} sx={{ height: "200px", backgroundSize: "cover !important", width: "320px", background: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/ee4f9e9d-335f-4796-a4e9-ddafe80f7c67/d8kxplv-0cafc06d-2f8e-4ee8-91b9-14d11abda54f.png")' }}>
                <Box gap={2} sx={{ display: "flex" }} alignItems="center" alignContent={"center"} justifyContent={"center"} >
                    <Button variant="contained" sx={{ mt: 18, borderRadius: "20px", bgcolor: "#1DB954" }}>Trending Beats</Button>
                </Box>
            </Box>
            <Typography sx={{ mt: 2 }} >Top Artists</Typography>
            <Box sx={{ display: "grid" }} >
                <ImageList
                    sx={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                        gridAutoColumns: "minmax(160px, 1fr)"
                    }}
                >
                    {
                        data.artist.map(e =>
                            <ArtistItem img={`${e}`} />
                        )
                    }
                </ImageList>
            </Box>
            <Typography variant="h3" >Want more!?</Typography>
            <Typography variant="body" >get yourself CUSTOM BEAT today</Typography>
            <Box style={{ marginTop: 14 }} sx={{ height: "200px", backgroundSize: "cover !important", width: "320px", background: 'url("https://cdn.mos.cms.futurecdn.net/doXGMAjXPZaCpe9tjkFKsd.jpg")' }}>
                <Box gap={2} sx={{ display: "flex" }} alignItems="center" alignContent={"center"} justifyContent={"center"} >
                    <Button variant="contained" sx={{ mt: 18, borderRadius: "20px", bgcolor: "#1DB954" }}>Custom Beat</Button>
                </Box>
            </Box>
            <Box sx={{ mt: 3 }} >
                <Typography variant="h4" >Got Something to say!?</Typography>
                <Typography variant="body" >feel free to contact us</Typography>
                <FormControl sx={{ m: 1 }}>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">
                            <CreateIcon />
                        </InputAdornment>}
                        endAdornment={<Button>Send</Button>}
                    />
                </FormControl>
            </Box>

        </Box>

    );
}

export default Home;