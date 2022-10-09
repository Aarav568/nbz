import { Grid, Typography, Switch } from "@mui/material";

const SettingsItem = ({ title, subtitle_1, subtitle_2, checked }) => {
    return (
        <>
            <Grid item>
                <Typography variant='h6' >{title}</Typography>
                <Typography variant='p' >{subtitle_1}<br /> {subtitle_2}</Typography>
            </Grid>
            <Grid item>
                <Switch checked={checked} />
            </Grid>
        </>
    )
}

export default SettingsItem