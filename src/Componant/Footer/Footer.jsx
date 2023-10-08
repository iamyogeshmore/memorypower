import React from "react";
import Typography from "@mui/material/Typography";
import logoImg from "./../Assets/logo.png";
import HouseIcon from "@mui/icons-material/House";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        width: "auto",
        height: "100%",
        backgroundColor: "lightblue",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "40%",
          }}
        >
          <img
            src={logoImg}
            alt="Logo"
            style={{ width: "12vw", marginBottom: "10px" }}
          />
          <Typography
            color="white"
            sx={{ fontSize: "16px", lineHeight: "1.5" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <button
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "35px",
              border: "none",
              backgroundColor: "#1E90FF",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              textAlign: "center",
              lineHeight: "35px",
              marginTop: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0073e6";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgb(149, 188, 23)";
            }}
          >
            Read More..
          </button>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              padding: "1%",
              justifyContent: "25%",
            }}
          >
            <a href="https://www.facebook.com/" className="social-icon">
              <FacebookIcon
                style={{
                  marginRight: "10px",
                  marginLeft: "50px",
                  color: "pink",
                }}
              />
            </a>
            <a href="https://www.instagram.com/" className="social-icon">
              <InstagramIcon style={{ marginRight: "10px", color: "pink" }} />
            </a>
            <a href="https://twitter.com/" className="social-icon">
              <TwitterIcon style={{ color: "pink" }} />
            </a>
          </div>
        </div>

        <div
          className="menu"
          style={{ display: "flex", flexDirection: "column", margin: "0 20px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <AddLinkOutlinedIcon style={{ marginRight: "20px" }} />
            <a href="#underline" style={{ fontSize: "1.4em", color: "white" }}>
              Important Link
            </a>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <HouseIcon className="footerIcon" />
            <span>Home</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <VerifiedOutlinedIcon className="footerIcon" />
            <span>About Us</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <AutoAwesomeOutlinedIcon />
            <span>Meet Founder</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <WorkspacePremiumOutlinedIcon />
            <span>Our Certificate</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <SchoolOutlinedIcon />
            <span>Courses</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <CollectionsOutlinedIcon />
            <span>Gallery</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <LocalPhoneOutlinedIcon />
            <span>Contact us</span>
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", margin: "0 20px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            {" "}
            <AddLinkOutlinedIcon style={{ marginRight: "10px" }} />
            <a href="#underline" style={{ fontSize: "1.2em", color: "white" }}>
              More Link
            </a>{" "}
          </div>

          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Career</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Teacher Login</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Student Login</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Register Now</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Terms & Condition</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Privacy Policy</span>
          </div>
        </div>

        <div
          className="menu"
          style={{ display: "flex", flexDirection: "column", margin: "0 20px" }}
        >
          <div style={{ marginBottom: "10px", marginTop: "50px" }}>
            <OpenInNewOutlinedIcon />
            <span> Help Desk</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Complaint Redressal</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span> Apply For Teacher Role</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <OpenInNewOutlinedIcon />
            <span>Help Desk</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "none",
          padding: "10px",
          color: "white",
        }}
      >
        Copyright © Memorypower 2023.
      </div>
    </div>
  );
};

export default Footer;
