import { Container, Grid, Box, Link } from "@mui/material"
import { SectionalHeading } from "../../../../Components/Components";
import project1 from './Images/01.jpg';
import project2 from './Images/05.jpg'
import project3 from './Images/03.jpg'
import project4 from './Images/04.jpg'
import project5 from './Images/02.jpg';
import project7 from './Images/06.jpg';
import project8 from './Images/07.jpg';
import project9 from './Images/08.jpg';
import project10 from './Images/09.jpg';
import project6 from './Images/010.jpg'

const Portfolio = () => {
    return (
        <>
            <Container maxWidth="xxl" className="p-0" id="portfolio">
                <Box py={5} style={{ backgroundColor: "#2ab189" }}>
                    <Grid container>
                        <Grid item xs={11} md={10} lg={9} className="mx-auto">
                            <Box py={5}>
                                <SectionalHeading head="BROWSE MY MOST RECENT PROJECTS BELOW AND ENJOY MY HANDMADE WORK WITH LOVE FOR EVERY DETAIL." clr="#fff" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Grid container>
                                    {
                                        [{ id: "project-1", link: "#", image: project1 }, { id: "project-2", link: "#", image: project2 }, { id: "project-3", link: "#", image: project3 }, { id: "project-4", link: "#", image: project4 }].map(item => <Grid key={item.id} item xs={6} >
                                            <Box>
                                                <Link href={item.link}>
                                                    <img src={item.image} alt={item.id} className="img-fluid" />
                                                </Link>
                                            </Box>
                                        </Grid>
                                        )
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Link href="#">
                                    <img src={project5} alt="project5" className="img-fluid" />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Link href="#">
                                    <img src={project6} alt="project5" className="img-fluid" />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Grid container>
                                    {
                                        [{ id: "project-7", link: "#", image: project7 }, { id: "project-8", link: "#", image: project8 }, { id: "project-9", link: "#", image: project9 }, { id: "project-10", link: "#", image: project10 }].map(item => <Grid key={item.id} item xs={6} >
                                            <Box>
                                                <Link href={item.link}>
                                                    <img src={item.image} alt={item.id} className="img-fluid" />
                                                </Link>
                                            </Box>
                                        </Grid>
                                        )
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Portfolio