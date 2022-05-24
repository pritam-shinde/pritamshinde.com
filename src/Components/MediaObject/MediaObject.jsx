import { Box, Grid, Typography } from '@mui/material';
import './sass/media.css';

const MediaObject = ({ image, alt, title, para }) => {
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <img src={image} alt={alt} className='img-fluid' />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant='h3' className='text-white' gutterBottom >{title}</Typography>
                        <Typography style={{color: "#ccc"}}>{para}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MediaObject