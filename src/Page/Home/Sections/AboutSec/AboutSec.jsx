import { Container, Grid, Box } from "@mui/material";
import { MediaObject, SectionalHeading } from '../../../../Components/Components';
import data from './Data/Data'

const AboutSec = () => {
    return (
        <>
            <Container maxWidth="xxl" style={{ backgroundColor: "#111" }} id="about">
                <Grid container>
                    <Grid item xs={11} md={10} lg={9} className="mx-auto">
                        <Box py={5}>
                            <SectionalHeading head="I'M A CREATIVE FREELANCER LOCATED IN BROOKLYN, NEW YORK. I’VE WON A TON OF AWARDS AND HAVE BEEN FEATURED IN ALL OF THE MAGAZINES." clr="#fff" />
                            <Box mt={5}>
                                <Grid container spacing={5}>
                                    {
                                        data.map((item, index)=><Grid item key={item.id} xs={12} sm={6} lg={4} data-aos={index === 0 ? "zoom-in-right" : index === 3 ? "zoom-in-right" : index === 1 ? "zoom-in" :  index === 4 ? "zoom-in" : index === 2 ? "zoom-in-left" : index === 5 ? "zoom-in-left" : null }>
                                            <MediaObject image={item.image} title={item.title} alt={item.title} para={item.para} />
                                        </Grid>)
                                    }
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutSec