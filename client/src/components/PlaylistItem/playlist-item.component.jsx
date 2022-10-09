import { Card, CardActionArea, CardMedia, ImageListItem } from "@mui/material"
import { useNavigate } from "react-router"

const PlayListItem = ({img}) => {
    const navigate = useNavigate()
    return (
        <ImageListItem >
            <Card sx={{ maxWidth: 345, height: "150px", width: "150px" }}>
                <CardActionArea>
                    <CardMedia 
                        onClick={() => navigate("/pop")}
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