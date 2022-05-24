import { Box, Typography } from "@mui/material";
import './sass/sectionalheading.css';

const SectionalHeading = ({head, clr}) => {
  return (
    <>
    <Box>
        <Typography data-aos="fade-up" variant="h2" style={{color: clr}}>{head}</Typography>
    </Box>
    </>
  )
}

export default SectionalHeading