import { Paper, Typography } from "@mui/material";
import React from "react";
import GraphImg from "../Assets/barGraph.png";

const PageThirdView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "0%",
        padding: "5%",
      }}
    >
      <div>
        <Paper elevation={2} sx={{ width: "22vw" }}>
          <img style={{ width: "20vw" }} src={GraphImg} alt="" />
        </Paper>
      </div>

      <div style={{ marginLeft: "18vw" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "2rem",
              padding: "8px",
            }}
          >
            How do we prepare our kids for the better future ?
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Here is a better way to build the mindsets of our kids to lead
            businesses of the future. This course has been carefully designed to
            enrich students with the skills needed for them to thrive as
            creative thinkers, great leaders, public speakers and leading life
            like “Entrepreneurs”. Each module of the course contains fun &
            engaging assignments that help our students learn the subject matter
            better through practical implementation. This also helps schools and
            parents assess improvement and see tangible results of the student’s
            learning.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PageThirdView;
