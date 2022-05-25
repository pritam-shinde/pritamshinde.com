import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './sass/singleblog.css'

const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setItem] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleFetchBlogs = async () => {
    await fetch('https://nonstopcorp.com/blog/wp-json/wp/v2/posts/').then(res => res.json()).then(data => setBlogs(data))
  }

  useEffect(() => {
    handleFetchBlogs()
  }, [blogs])

  const handleFetchBlog = async (slug) => {
    await fetch(`https://nonstopcorp.com/blog/wp-json/wp/v2/posts?slug=${slug}`).then(res => res.json()).then(data => setItem(data))
  }

  useEffect(() => {
    handleFetchBlog(slug)
  }, [slug, blog])

  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <main style={{ marginTop: "5.8rem" }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={11} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={8}>
                    <Box>
                      {
                        blog ? blog.map(item => <Box>
                          <Typography variant="h1" style={{ fontSize: "2rem" }} gutterBottom>{item.title.rendered}</Typography>
                          <img src={item.fimg_url} className="img-fluid" alt={item.title.rendered} />
                          <Box dangerouslySetInnerHTML={{ __html: item.content.rendered }} ></Box>
                        </Box>) : "Loading..."
                      }
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box component={Paper}>
                      <Box p={3}>
                        <Typography variant="h5">Recent Post</Typography>
                        <Box mt={3}>
                          {
                            blogs.slice(0, 5).map(item => <Box mb={3}>
                              <Grid container spacing={1}>
                                <Grid item xs={2}>
                                  <Box>
                                    <img src={item.fimg_url} className="img-fluid" alt={item.title.rendered} />
                                  </Box>
                                </Grid>
                                <Grid item xs={10}>
                                  <Box>
                                    <h5><Link to={`/blog/${item.slug}`}>{item.title.rendered}</Link></h5>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>)
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default SingleBlog