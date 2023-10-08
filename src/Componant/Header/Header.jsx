import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../Assets/logo.png";
import "./Header.css";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="app-bar">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="menu-icon"
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="logo"
        >
          <img src={logo} alt="Logo" className="logo-image" />
        </Typography>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          className="nav-button"
        >
          <HomeIcon fontSize="small" style={{ marginRight: "8px" }} /> Home
        </Button>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          className="nav-button"
        >
          <InfoIcon fontSize="small" style={{ marginRight: "8px" }} /> About Us
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Fundamentals of Memory</MenuItem>
          <MenuItem onClick={handleMenuClose}>Comprehensive Memory</MenuItem>
          <MenuItem onClick={handleMenuClose}>Panoramic Memory</MenuItem>
        </Menu>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          className="nav-button"
          onClick={handleMenuOpen}
        >
          <SchoolIcon fontSize="small" style={{ marginRight: "8px" }} /> Courses
        </Button>

        <Button
          color="inherit"
          sx={{ marginRight: "20px", fontWeight: "bold" }}
          className="nav-button"
        >
          <PhoneIcon fontSize="small" style={{ marginRight: "8px" }} /> Contact
          Us
        </Button>
        <Button
          color="inherit"
          sx={{ border: "1px solid orange" }}
          className="nav-button orange-button"
        >
          <a href="/login" className="nav-link">
            <AccountTreeIcon
              fontSize="small"
              style={{
                marginRight: "8px",
                color: "orange",
                marginLeft: "8px",
                textDecoration: "none",
              }}
            />
            <span>Join Class</span>
          </a>
        </Button>

        <Button
          color="inherit"
          sx={{
            border: "1px solid orange",
            marginLeft: "15px",
            marginRight: "15px",
          }}
          className="nav-button orange-button"
        >
          {" "}
          <a href="/login" className="nav-link">
            <EventAvailableIcon
              fontSize="small"
              style={{ marginRight: "8px", color: "orange" }}
            />
            <span style={{ color: "orange" }}>Book a Free Demo</span>{" "}
          </a>
        </Button>
        <IconButton
          color="inherit"
          className="social-icon"
          component="a"
          href="https://www.facebook.com"
          target="_blank"
        >
          <Facebook />
        </IconButton>

        <IconButton
          color="inherit"
          className="social-icon"
          component="a"
          href="https://www.twitter.com"
          target="_blank"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          className="social-icon"
          component="a"
          href="https://www.instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
