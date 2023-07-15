import React from "react";
import { Box, Typography } from "@mui/material";

function ParticleMotionGenerator() {
  return (
    <>
      <Box
        align="center"
        padding="3% 0 3% 0"
        margin="15% 5% 0 5%"
        backgroundColor="#ffffff"
      >
        <Typography
          className="heading"
          variant="h3"
          padding="0% 0% 2% 0%"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "3% 3% 0 3%",
              fontSize: "2.5rem",
            },
          }}
        >
          <strong>
            Particle Motion <br />
            Generator
          </strong>
        </Typography>
        <Typography
          className="particle-motion"
          variant="h4"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "10% 3% 10% 3%",
              fontSize: "1.5rem",
            },
          }}
        >
          A 1D visual representation solved by the <br />
          FDTD (finite-difference time-domain) method.
        </Typography>
      </Box>
      <Box
        align="left"
        padding="2% 0 2% 0"
        margin="0 5% 10% 5%"
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
            lineHeight: "2em",
            padding: "2% 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em #39FF14",
            "@media screen and (max-width: 600px)": {
              padding: "10% 5% 0 5%",
              fontSize: "1.5rem",
            },
          }}
        >
          Particle motion is the study of how objects and particles move. It
          involves understanding concepts like position, velocity, and
          acceleration. By studying particle motion, we can predict and analyze
          how things move and learn more about the world around us.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            lineHeight: "2em",
            padding: "2% 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em red",
            "@media screen and (max-width: 600px)": {
              padding: "10% 5% 0% 5%",
              fontSize: "2rem",
            },
          }}
        >
          Examples Include:
        </Typography>
        <Typography
          variant="h4"
          sx={{
            lineHeight: "2em",
            padding: "0 10% 2% 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em blue",
            "@media screen and (max-width: 600px)": {
              padding: "1% 5% 10% 5%",
              fontSize: "1.5rem",
            },
          }}
        >
          Dropping an Object: When you drop an object, it falls towards the
          ground due to gravity. As it falls, it speeds up.
          <br />
          <br />
          Throwing a Ball: When you throw a ball in an arc, it moves both
          horizontally and vertically. The horizontal motion stays the same, but
          gravity makes the ball go up and then come back down.
        </Typography>
      </Box>
    </>
  );
}

export { ParticleMotionGenerator };
