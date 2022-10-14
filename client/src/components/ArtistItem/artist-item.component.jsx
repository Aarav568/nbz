import { Card, CardActionArea, CardMedia, ImageListItem } from "@mui/material"
import { useNavigate } from "react-router"

const ArtistItem = ({ img, id }) => {
    const navigate = useNavigate()
    return (
        <>
            <ImageListItem>
                <Card sx={{ maxWidth: 345, height: "150px", width: "150px", borderRadius: "50%" }}>
                    <CardActionArea>
                        <CardMedia
                            onClick={() => navigate(`/artist/${id}`)}
                            component="img"
                            image={`${img}`}
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
            </ImageListItem>
        </>
    )
}

export default ArtistItem