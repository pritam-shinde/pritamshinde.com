import { Container, Grid, Typography, Box } from '@mui/material';
import Typical from 'react-typical'
import './sass/hero.css';

const Hero = () => {
  return (
    <>
      <Container maxWidth="xxl" id="banner">
        <Grid container style={{ height: "inherit" }}>
          <Grid item xs={11} className="mx-auto d-flex align-items-center" style={{ height: "inherit" }} >
            <Box id="HeroText">
              <Typography variant='h5' className='text-white'>
                <Typical
                  steps={['FREELANCER', 3000, 'SEO-EXPERT', 3000, 'PROGRAMMER', 3000]}
                  loop={Infinity}
                />
              </Typography>
              <Typography variant='h1' gutterBottom>I LOVE DIGITAL<br/>MARKETING AND<br/>WEB DEVELOPMENT</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Hero