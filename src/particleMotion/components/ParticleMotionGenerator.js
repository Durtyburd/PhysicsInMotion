import React from "react";
import { Box, Typography } from "@mui/material";

function ParticleMotionGenerator() {
  return (
    <>
      <Box
        align="center"
        padding="1% 0 1% 0"
        margin="3% 5% 0 5%"
        backgroundColor="#ffffff"
      >
        <Typography
          className="particle-motion"
          variant="h5"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 0 5%",
              fontSize: "1.2rem",
            },
          }}
        >
          <strong>What is Particle Motion?</strong>
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
          Particle motion is the study of how objects and particles move. It
          involves understanding concepts like position, velocity, and
          acceleration. By studying particle motion, we can predict and analyze
          how things move and learn more about the world around us.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            padding: "1% 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em red",
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 0 5%",
              fontSize: "1.2rem",
            },
          }}
        >
          Examples Include:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            padding: "0 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em blue",
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 0 5%",
              fontSize: "1rem",
            },
          }}
        >
          <strong>Dropping an Object:</strong> When you drop an object, it falls
          towards the ground due to gravity. As it falls, it speeds up.
          <br />
          <strong>Throwing a Ball:</strong> When you throw a ball in an arc, it
          moves both horizontally and vertically. The horizontal motion stays
          the same, but gravity makes the ball go up and then come back down.
        </Typography>
      </Box>
    </>
  );
}

export { ParticleMotionGenerator };
