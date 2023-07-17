import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function WaveMotionGenerator() {
  return (
    <>
      <Box margin="6% 5% 0 5%" padding="3% 0 1% 0" backgroundColor="#ededeb">
        <Typography
          className="wave-motion"
          variant="h4"
          padding="0% 0% 2% 0%"
          align="center"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 0 5%",
              fontSize: "1.2rem",
            },
          }}
        >
          <strong>Wave Motion Generator</strong>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            padding: "0 10% 0 10%",
            "@media screen and (max-width: 600px)": {
              padding: "5% 5% 5% 5%",
              fontSize: "1rem",
            },
          }}
        >
          A 1D visual representation solved by the FDTD (finite-difference
          time-domain) method.
          <br />
          <br />
          This rendering simulates the probability amplitude of a particle.
        </Typography>
        <Divider sx={{ margin: "3% 5% 3% 5%" }} />
        <Typography
          variant="h5"
          sx={{
            padding: "0 10% 2% 10%",
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 5% 5%",
              fontSize: "1rem",
            },
          }}
        >
          Furthermore, below you can render a wave of your choosing. If you
          click "sound" or "light" the wave will will be rendered based off of
          preset variables. However, you can also create your own wave.
          <br />
          <br />
          <em>
            In the text boxes it will tell you what data is needed to generate
            your wave.
          </em>
          <br />
          <br />
          Now when it renders, it will then show how fast that wave moves
          through a medium and how it reflects when changing mediums (there is a
          vertical line on the chart: on the left side is air - on the right
          side is water). Lastly, the x-axis represents time steps and y-axis
          represents the spacial points.
        </Typography>
        <Divider sx={{ margin: "2% 5% 0 5%" }} />
      </Box>
    </>
  );
}

export { WaveMotionGenerator };
