import { Box, Typography } from "@mui/material";
import React from "react";
import physicsPic from "../../images/physics.png";

function MainAbout() {
  return (
    <Box
      align="center"
      padding="22% 0 22% 0"
      backgroundColor="#97FEED"
      color="#FFFFFF"
      sx={{
        backgroundImage: `url(${physicsPic})`,
        backgroundSize: "cover",
        "@media screen and (max-width: 600px)": {
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      }}
    >
      <Typography
        variant="h2"
        padding="0% 0% 5% 0%"
        sx={{
          "@media screen and (max-width: 600px)": {
            padding: "18% 3% 0 3%",
            fontSize: "2.5rem",
          },
        }}
      >
        <strong>
          Interactive 1D Particle, Wave, <br />
          and Electron Motion
          <br /> Visualizations
        </strong>
      </Typography>
      <Typography
        variant="h4"
        sx={{
          "@media screen and (max-width: 600px)": {
            padding: "10% 3% 10% 3%",
            fontSize: "1.5rem",
          },
        }}
      >
        Explore the fascinating world of particle dynamics with <br />
        our interactive visualizations. Witness the behavior of <br />
        particles, waves, and electrons in one-dimensional space <br />
        through realistic and intuitive renderings.
      </Typography>
    </Box>
  );
}

export { MainAbout };
