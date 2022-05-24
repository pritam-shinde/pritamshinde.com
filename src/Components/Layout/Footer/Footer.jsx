import { Container, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#111"}}>
      <Container maxWidth="xxl" className="py-md-4">
        <Typography align="center" className="text-white" variant="body2"><Copyright />{new Date().getFullYear()} pritamshinde.com | All Rights Researved</Typography>
      </Container>
    </footer>
  )
}

export default Footer