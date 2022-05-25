import { Container, Grid, Box, List, ListItem, ListItemIcon, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { SectionalHeading } from '../../../../Components/Components'

const Contact = () => {
    return (
        <>
            <Container maxWidth="xxl" style={{ backgroundColor: "#2ab189" }} id="contact">
                <Grid container>
                    <Grid item xs={11} md={10} lg={9} className="mx-auto">
                        <Box py={5}>
                            <SectionalHeading head="I WELCOME YOU TO CONTACT ME FOR MORE INFORMATION ABOUT ANY OF MY PRODUCTS OR SERVICES." clr="#fff" />
                        </Box>
                        <Box py={5}>
                            <h3><a href="tel:+91895-641-5939" className="text-white">(+91) 895-641-5939</a></h3>
                            <h3><a href="mailto:pritam@pritamshinde.com" className="text-white">pritam@pritamshinde.com</a></h3>
                            <Box>
                                <List className="d-flex flex-wrap justify-content-start">
                                    {
                                        [{ id: "contact-1", icon: <Facebook />, link: "#" }, { id: "contact-2", icon: <Twitter />, link: "#" }, { id: "contact-3", icon: <Instagram />, link: "#" }, { id: "contact-4", icon: <LinkedIn />, link: "#" }, { id: "contact-5", icon: <YouTube />, link: "#" }].map(item => <ListItem key={item.id} style={{ width: "5%" }}>
                                            <Link href={item.link} target="_blank">
                                                <ListItemIcon className="text-white">
                                                    {item.icon}
                                                </ListItemIcon>
                                            </Link>
                                        </ListItem>)
                                    }
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Contact