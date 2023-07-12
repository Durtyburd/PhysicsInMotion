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
      }}
    >
      <Typography variant="h2" padding="0% 0% 5% 0%">
        <strong>
          1D Wave <br />
          Function
        </strong>
      </Typography>
      <Typography variant="h6">
        A 1D visual representation solved by the <br />
        FDTD (finite-difference time-domain) method.
      </Typography>
    </Box>
  );
}

export { MainAbout };
