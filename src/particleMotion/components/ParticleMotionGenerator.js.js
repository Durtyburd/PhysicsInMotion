import React from "react";
import { Box, Typography } from "@mui/material";

function ParticleMotionGenerator() {
  return (
    <>
      <Box
        align="center"
        padding="3% 0 3% 0"
        margin="10% 0 0 0"
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
    </>
  );
}

export { ParticleMotionGenerator };
