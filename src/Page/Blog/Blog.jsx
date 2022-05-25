import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import './sass/blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [noOfBlogs, setNoOfBlogs] = useState(0)

    const handleFetchBlog = async () => {
        await fetch('https://nonstopcorp.com/blog/wp-json/wp/v2/posts/').then(res => res.json()).then(data => setBlogs(data.slice(noOfBlogs, (noOfBlogs + 6))));
    }

    useEffect(() => {
        handleFetchBlog()
    }, [blogs, noOfBlogs])

    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <main id="blogs" >
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} lg={10} className="mx-auto">
                            <Box py={5}>
                                <Typography variant="h1" align="center">Blogs</Typography>
                                <Box mt={5}>
                                    <Grid container spacing={2}>
                                        {
                                            blogs.map(blog => <Grid item xs={12} sm={6} lg={4}>
                                                <Card className="shadow">
                                                    <CardMedia component="img" image={blog.fimg_url} className="img-fluid" />
                                                    <CardContent>
                                                        <Typography variant="h5"><Link to={`/blog/${blog.slug}`} style={{ fontSize: "1.17rem", fontWeight: 700, color: "#2ab189" }} >{blog.title.rendered}</Link></Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>)
                                        }
                                    </Grid>
                                    <Box py={3} className="text-center">
                                        {
                                            noOfBlogs >= blogs.length ? <Button onClick={() => setNoOfBlogs(noOfBlogs - 6)} variant="contained" color="primary" >Back</Button> :
                                                <Button onClick={() => setNoOfBlogs(noOfBlogs + 6)} variant="contained" color="primary" >Next</Button>
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Blog