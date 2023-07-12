import React from "react";
import { Box, Typography } from "@mui/material";

function WaveMotionGenerator() {
  return (
    <>
      <Box align="center" padding="7% 0 3% 0" backgroundColor="#ededeb">
        <Typography className="heading" variant="h3" padding="0% 0% 2% 0%">
          <strong>
            1D Wave <br />
            Function
          </strong>
        </Typography>
        <Typography variant="h4">
          A 1D visual representation solved by the <br />
          FDTD (finite-difference time-domain) method.
        </Typography>
      </Box>
    </>
  );
}

export { WaveMotionGenerator };
