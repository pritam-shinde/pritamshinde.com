import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, IconButton, List, ListItem, ListItemText, ListItemIcon, Typography, Link } from '@mui/material';
import { Menu, Close, Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Logo from './Images/logo.svg';
import './sass/header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
const location = useLocation();
  return (
    <>
      <header className={`py-md-2 py-1 px-md-5 px-3 ${open ? "fixed-top" : null}`} id="header" style={{backgroundColor: location.pathname === "/" ? "rgba(0, 0, 0, 0.7)": "#111"}}>
        <nav className='navbar'>
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </NavLink>
          <Box style={{ flexGrow: 1 }} />
          <IconButton onClick={() => { setOpen(!open) }} >
            {
              open ? <Close style={{ color: "#fff" }} /> : <Menu style={{ color: "#fff" }} />
            }
          </IconButton>
        </nav>
      </header>
      {
        open ? <Box id="menu" className="animate__animated animate__slideInDown d-flex justify-content-center align-items-center">
          <Box className="d-flex flex-column align-items-center">
            <Box>
              <List>
                {
                  [{ id: "menu-1", path: "/", title: "HOME" }, { id: "menu-2", path: "#about", title: "ABOUT" }, { id: "menu-3", path: "#portfolio", title: "PORTFOLIO" }, { id: "menu-4", path: "/blog", title: "BLOG" }, { id: "menu-5", path: "#contact", title: "CONTACT" }].map((item, index) => {
                    return (<>
                      {
                        location.pathname === "/" ? index !== 3 && index !== 0 ? <ListItem key={item.id}>
                        <Link href={item.path} onClick={() => setOpen(!open)}><ListItemText primary={item.title} /></Link>
                        </ListItem> : <ListItem key={item.id}>
                        <NavLink to={item.path} onClick={() => setOpen(!open)}><ListItemText primary={item.title} /></NavLink>
                        </ListItem> : <ListItem key={item.id}>
                        <NavLink to="/" onClick={() => setOpen(!open)}><ListItemText primary={item.title} /></NavLink>
                        </ListItem>
                      }
                    </>)
                  })
                }
              </List>
            </Box>
            <Box mt={8} id="socialLinks">
              <Typography align="center" gutterBottom>FOLLOW ME</Typography>
              <Box>
                <List className="d-flex flex-wrap justify-content-center">
                  {
                    [{ id: "followMe-1", icon: <Facebook />, link: "#" }, { id: "followMe-2", icon: <Twitter />, link: "#" }, { id: "followMe-3", icon: <Instagram />, link: "#" }, { id: "followMe-4", icon: <LinkedIn />, link: "#" }, { id: "followMe-5", icon: <YouTube />, link: "#" }].map(item => <ListItem key={item.id} style={{ width: "15%" }}>
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
          </Box>
        </Box> : null
      }
    </>
  )
}

export default Header