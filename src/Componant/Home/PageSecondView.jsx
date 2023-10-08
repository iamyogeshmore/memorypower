import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img1 from "../Assets/slideImg1.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <Box sx={{ width: "auto" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Our Vision" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.00938em",
              }}
            >
              “THE MEMORY POWER” is an EdTech startup company that equips <br />
              students with the skillset and mindset required to be the future
              of the <br />
              companies worldwide. We connect a deep understanding of education
              with <br />
              the power of the “21st CENTURY LIFE SKILLS” to make your child
              ready to <br />
              the power of the “21st CENTURY LIFE SKILLS” to make your child
              ready to <br />
              face this competitive and challenging world.
              <br />
              The universe is a subject created in the minds of humans addressed
              by the <br />
              facts and theories since centuries. To think about it in detail
              requires the <br />
              strength of knowledge and experience which are used to lead an
              intellectual life.
              <br />
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.00938em",
              }}
            >
              To help your child enhance the understanding of life based on the
              core <br />
              concept of the most powerful tool in the world - “THE MEMORY
              POWER”. <br />
              “Memory Power” is an art of practicing the life skills that will
              provide your <br />
              children with the important tools for the development of brain,
              such as deep <br />
              thinking, making new friends, decision making and taking actions
              in <br />
              situations where their parents or teachers are not around to help.
            </p>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
