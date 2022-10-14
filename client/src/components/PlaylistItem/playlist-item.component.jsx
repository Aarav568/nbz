import { Card, CardActionArea, CardMedia, ImageListItem } from "@mui/material"
import { useNavigate } from "react-router"

const PlayListItem = ({img, id}) => {
    const navigate = useNavigate()
    return (
        <ImageListItem >
            <Card sx={{ maxWidth: 345, height: "150px", width: "150px" }}>
                <CardActionArea>
                    <CardMedia 
                        onClick={() => navigate(`/playlist/${id}`)}
                        component="img"
                        height="140"
                        image={`${img}`}
                        alt="green iguana"
                    />
                </CardActionArea>
            </Card>
        </ImageListItem>
    )
}

export default PlayListItem