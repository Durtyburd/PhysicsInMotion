import { Box, Typography } from "@mui/material";
import React from "react";
import physicsPic from "../../images/physics.png";

function MainAbout() {
  return (
    <>
      <Box
        align="center"
        padding="12% 0 3% 0"
        color="#FFFFFF"
        sx={{
          position: "relative",
          "@media screen and (max-width: 600px)": {
            padding: "5% 0 5% 0",
          },
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
          variant="h6"
          padding="0% 0% 3% 0%"
          sx={{
            textShadow: "1px 1px 4px black, 0 0 1em yellow",
            animation: "fadeIn 5s",
            "@media screen and (max-width: 600px)": {
              padding: "18% 10% 0 10%",
              fontSize: "1.5rem",
            },
          }}
        >
          <strong>Beta Version</strong>
        </Typography>
        <Typography
          variant="h4"
          padding="0% 0% 3% 0%"
          sx={{
            textShadow: "1px 1px 4px black, 0 0 .3em cyan",
            animation: "fadeIn 5s",
            "@media screen and (max-width: 600px)": {
              padding: "18% 10% 0 10%",
              fontSize: "1.5rem",
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
          variant="h6"
          sx={{
            padding: "0 5% 0 5%",
            animation: "fadeIn 12s",
            textShadow: "1px 1px 4px black, 0 0 .3em blue",

            "@media screen and (max-width: 600px)": {
              padding: "5% 10% 5% 10%",
              fontSize: "1rem",
            },
          }}
        >
          Explore the fascinating world of particle dynamics with our
          interactive visualizations. Witness the behavior of particles, waves,
          and electrons in one-dimensional space through realistic and intuitive
          renderings.
        </Typography>
      </Box>
      {/* Next Section */}
      <Box
        align="center"
        padding="1% 0 1% 0"
        margin="0 5% 0 5%"
        backgroundColor="#ffffff"
      >
        <Typography
          className="heading"
          variant="h5"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "0 3% 0 3%",
              fontSize: "1.2rem",
            },
          }}
        >
          <strong>Particle, Wave and Electron Motion</strong>
        </Typography>
      </Box>
      <Box
        align="left"
        padding="2% 0 2% 0"
        margin="0 5% 0 5%"
        color="white"
        sx={{
          backgroundColor: "rgba(225, 225, 225, .2)", // Adjust the opacity value (0.5) as desired
          position: "relative",
          "@media screen and (max-width: 600px)": {},
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "0 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em #39FF14",

            "@media screen and (max-width: 600px)": {
              padding: "5% 5% 5% 5%",
              fontSize: "1rem",
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
