import React from "react";
import { Box, Typography } from "@mui/material";

function ElectronMotionGenerator() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Box align="center" padding="7% 0 3% 0" backgroundColor="white">
        <Typography
          className="heading"
          variant="h3"
          padding="0% 0% 2% 0%"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "18% 3% 0 3%",
              fontSize: "2.5rem",
            },
          }}
        >
          <strong>
            The Schrödinger <br />
            Equation
          </strong>
        </Typography>
        <Typography
          className="electron-motion"
          variant="h4"
          padding="0% 0% 2% 0%"
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
        <Typography sx={{ paddingBottom: "2%", alignSelf: "center" }}>
          *TIP: Enter these inputs. <br />
          Height of potential barrier: 600 <br />
          potential barrier width: .25
          <br />
          kinetic energy: 500
          <br />
          initial spread: .8*
        </Typography>
        <br />
      </Box>
    </div>
  );
}

export { ElectronMotionGenerator };
