import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function ElectronMotionGenerator() {
  return (
    <>
      <Box margin="5% 5% 0 5%" padding="3% 0 0 0" backgroundColor="white">
        <Typography
          className="heading"
          variant="h4"
          align="center"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "5% 3% 0 3%",
              fontSize: "1.2rem",
            },
          }}
        >
          <strong>
            The Schrödinger <br />
            Equation <br />
            (Time Dependent)
          </strong>
        </Typography>
        <Typography
          className="electron-motion"
          variant="h5"
          padding="3% 5% 0 5%"
          sx={{
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
          This rendering simulates quantum mechanical tunneling of an electron
          across a square potential barrier. The electron is represented by a 1D
          Gaussian wavefunction.
          <Divider sx={{ margin: "3% 0 3% 0" }} />
          <ul>
            <li>The first chart you will see is the initial wave function.</li>
            <li>
              The second chart you will see is the initial wave function after
              it has been solved with the Schrödinger Equation.
            </li>
            <li>
              The third and final chart you will see is the final wave function.
            </li>
          </ul>
        </Typography>
        <Divider sx={{ margin: "3% 5% 3% 5%" }} />

        <Typography
          align="center"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 0 5%",
              fontSize: ".6rem",
            },
          }}
        >
          *TIP: Enter these inputs. <br />
          Barrier Height: 600 <br />
          Barrier Width: .25
          <br />
          Electron Energy: 500
          <br />
          Wavefunction Spread: .8*
        </Typography>
        <br />
      </Box>
    </>
  );
}

export { ElectronMotionGenerator };
