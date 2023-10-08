import React from "react";
import NavigationBar from "../Header/Header";
import backgroundImg from "../Assets/imgbackground.png";
import secondBgImg from "../Assets/aboutCompany2.png";
import firstImg from "../Assets/aboutCompany.png";
import Paper from "@mui/material/Paper";
import { Typography, Card } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Home.css";
import PageSecondView from "./PageSecondView";
import Services from "./Services";
import PageForthView from "./PageForthView";
import PageFifthView from "./PageFifthView";
import Footer from "../Footer/Footer";
import BgImg from "../Assets/background image.jpg";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Home = () => {
  return (
    <div>
      <NavigationBar />
      {/* first page view */}
      <div
        style={{
          height: "80vh",
          marginTop: "15vh",
          zIndex: "0",
        }}
      >
        <div
          className="content"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div
            className="text-container"
            style={{
              width: "auto",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Online Education Courses</h1>
            <p style={{ fontSize: "30px", marginTop: "0px" }}>
              ''For Everyone''
            </p>
            <Paper
              elevation={9}
              sx={{ width: "35vw", height: "50vh", borderRadius: "10%" }}
            >
              <Card
                sx={{
                  width: "35vw",
                  height: "50vh",
                  borderRadius: "10%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "25px" }}>
                      Book your free class now
                    </Typography>
                    <Typography sx={{ display: "flex" }}>
                      <p>For Kids</p>

                      <FormControlLabel
                        sx={{ marginLeft: "15px" }}
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <p>For Adults (+18)</p>
                    </Typography>
                    <Typography>
                      Select your child's grade/class in school
                    </Typography>
                  </div>
                  <table className="my-table">
                    <tbody>
                      <tr>
                        <td>
                          <span>class</span> 1
                        </td>
                        <td>
                          <span>class</span> 2
                        </td>
                        <td>
                          <span>class</span> 3
                        </td>
                        <td>
                          <span>class</span> 4
                        </td>
                        <td>
                          <span>class</span> 5
                        </td>
                        <td>
                          <span>class</span> 6
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>class</span> 7
                        </td>
                        <td>
                          <span>class</span> 8
                        </td>
                        <td>
                          <span>class</span> 8
                        </td>
                        <td>
                          <span>class</span> 10
                        </td>
                        <td>
                          <span>class</span> 11
                        </td>
                        <td>
                          <span>class</span> 12
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Button
                    sx={{
                      marginTop: "20px",
                      width: "550px",
                      height: "50px",
                      backgroundColor: "#95bc17",
                    }}
                    variant="contained"
                  >
                    <CalendarMonthIcon sx={{ marginRight: "10px" }} />
                    Schedule a FREE Class
                  </Button>
                </div>
              </Card>
            </Paper>
          </div>

          <div className="content2" style={{ width: "auto" }}>
            <img
              style={{
                marginTop: "50px",
                position: "absolute",
                width: "35vw",
                height: "62vh",
              }}
              src={backgroundImg}
              alt="Home Image"
              className="home-image"
            />
            {/* <img src={logo} alt="Home Image" className="home-image" /> */}
            <img
              src={secondBgImg}
              style={{
                position: "absolute",
                marginLeft: "50px",
                borderRadius: "10%",
              }}
            />

            <img
              src={firstImg}
              style={{
                position: "relative",
                marginLeft: "60px",
                borderRadius: "10%",
              }}
            />
          </div>
        </div>
      </div>

      {/* second page view */}
      <div
        style={{
          width: "auto",
          height: "80vh",
          paddingTop: "5%",
          backgroundColor: "#e6f5f7",
        }}
      >
        <PageSecondView />
      </div>
      {/* third page view */}
      <div
        style={{
          width: "auto",
          height: "auto",

          backgroundColor: "#e6f5f7",
        }}
      >
        <Services />
      </div>
      {/* forth page view */}
      <div
        style={{ width: "auto", height: "auto", backgroundColor: "#e6f5f7" }}
      >
        <PageForthView />
      </div>
      {/* fifth page view */}
      <div
        style={{
          width: "auto",
          height: "70vh",
          backgroundColor: "#e6f5f7",
        }}
      >
        <PageFifthView />
      </div>

      <div style={{ backgroundColor: "#e6f5f7" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
