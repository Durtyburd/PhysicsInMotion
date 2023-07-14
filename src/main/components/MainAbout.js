import { Box, Typography } from "@mui/material";
import React from "react";
import physicsPic from "../../images/physics.png";

function MainAbout() {
  return (
    <>
      <Box
        align="center"
        padding="12% 0 10% 0"
        color="#FFFFFF"
        sx={{
          position: "relative",
          "@media screen and (max-width: 600px)": {},
        }}
      >
        {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${physicsPic})`,
          backgroundSize: "cover",
          filter: "blur(3px)",

          zIndex: -1,
          "@media screen and (max-width: 600px)": {
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        }}
      ></Box> */}
        <Typography
          variant="h2"
          padding="0% 0% 5% 0%"
          sx={{
            textShadow: "1px 1px 4px black, 0 0 .3em cyan",
            animation: "fadeIn 5s",
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
            animation: "fadeIn 12s",
            lineHeight: "2em",
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
      {/* Next Section */}
      <Box
        align="left"
        padding="2% 0 2% 0"
        color="white"
        sx={{
          backgroundColor: "rgba(225, 225, 225, .2)", // Adjust the opacity value (0.5) as desired
          position: "relative",
          "@media screen and (max-width: 600px)": {},
        }}
      >
        <Typography
          variant="h4"
          sx={{
            animation: "fadeIn 15s",
            lineHeight: "2em",
            padding: "2% 10% 2% 10%",
            "@media screen and (max-width: 600px)": {
              padding: "10% 5% 10% 5%",
              fontSize: "1.5rem",
            },
          }}
        >
          Classical physics, encompassing particle and wave motion, explores the
          behavior of objects and waves on macroscopic scales. It provides a
          framework to understand the motion of particles under the influence of
          forces and the propagation of waves through various mediums.
          <br />
          <br />
          On the other hand, quantum physics delves into the intriguing realm of
          electron motion, revealing the probabilistic nature of electrons and
          their wave-particle duality, revolutionizing our understanding of
          matter at the atomic and subatomic levels.
        </Typography>
      </Box>
    </>
  );
}

export { MainAbout };
