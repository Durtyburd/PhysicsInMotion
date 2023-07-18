import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { handleClick } from "../lib/handleClick.js";
import FirstChart from "./FirstChart.js";
import { scroller } from "react-scroll";

function Form3() {
  // State for user-inputted wave variables
  const [stateV0, setStateV0] = useState(0);
  const [statebw, setStatebw] = useState(0);
  const [statesig, setStatesig] = useState(0);
  const [stateke, setStateke] = useState(0);
  const [chartData, setChartData] = useState(null);
  const [finalFramesData, setFinalFramesData] = useState(null);
  const [xArr2Data, setXArr2Data] = useState(null);
  const [yArr2Data, setYArr2Data] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { q1, xArr2, yArr2, finalFrames } = handleClick(
      stateV0,
      statebw,
      statesig,
      stateke
    );
    setChartData(q1);
    setFinalFramesData(finalFrames);
    setXArr2Data(xArr2);
    setYArr2Data(yArr2);
  };

  return (
    <>
      <div
        style={{
          margin: "0 5% 0 5%",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          align="center"
          variant="h4"
          sx={{
            "@media screen and (max-width: 600px)": {
              padding: "0 5% 0 5%",
              fontSize: "1.2rem",
            },
          }}
        >
          <strong>Create your own wave</strong>
        </Typography>
        <form
          display="flex"
          //On submit calls the handleClick function to begin wave rendering process
          onSubmit={handleSubmit}
          align="center"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "@media screen and (max-width: 600px)": {
                padding: "0 10% 0 10%",
              },
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Barrier Height (eV)"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value > -1 && e.target.value <= 10e13) ||
                  e.target.value === "."
                ) {
                  setStateV0(e.target.value);
                } else {
                  alert(
                    "Please input a value between 1 and 100,000,000,000,000, but not 0."
                  );
                  e.target.value = 1;
                }
              }}
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Barrier Width (Å)"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value > -1 && e.target.value <= 10e13) ||
                  e.target.value === "."
                ) {
                  setStatebw(e.target.value);
                } else {
                  alert(
                    "Please input a value between 0 and 100,000,000,000,000, but not 0."
                  );
                  e.target.value = 1;
                }
              }}
              required
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "@media screen and (max-width: 600px)": {
                padding: "0 10% 0 10%",
              },
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Electron Energy (eV)"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value >= -1 && e.target.value <= 10e13) ||
                  e.target.value === "."
                ) {
                  setStateke(e.target.value);
                } else {
                  alert(
                    "Please input a value between 0 and 100,000,000,000,000, but not 0."
                  );
                  e.target.value = 0.1;
                }
              }}
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Wavefunction Spread (Å)"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value > -1 && e.target.value <= 10e13) ||
                  e.target.value === "."
                ) {
                  setStatesig(e.target.value);
                } else {
                  alert(
                    "Please input a value between 0 and 100,000,000,000,000, but not 0."
                  );
                  e.target.value = 1;
                }
              }}
              required
            />
          </Box>
          <Box align="center" padding="0 0 2% 0 ">
            <button
              onClick={() =>
                scroller.scrollTo("electron-motion-first-chart", {
                  smooth: true,
                  offset: -400,
                  duration: 500,
                })
              }
              color="primary"
              type="submit"
              style={{
                alignSelf: "center",
                marginTop: "1%",
                marginBottom: "1%",
              }}
            >
              Generate Initial Wave Function
            </button>
          </Box>
          <Box align="center">
            <Typography
              sx={{
                paddingBottom: "2%",
                alignSelf: "center",
                "@media screen and (max-width: 600px)": {
                  padding: "0 5% 0 5%",
                  fontSize: ".6rem",
                },
              }}
            >
              *NOTE: Once you press the button it may take a few seconds for the
              next chart to render.*
            </Typography>
          </Box>
        </form>
        <div className="electron-motion-first-chart"></div>
        {chartData && (
          <FirstChart
            q1={chartData}
            finalFrames={finalFramesData}
            xArr2={xArr2Data}
            yArr2={yArr2Data}
          />
        )}
      </div>
      <Box
        align="left"
        padding="2% 0 2% 0"
        margin="0 5% 5% 5%"
        color="white"
        sx={{
          backgroundColor: "rgba(225, 225, 225, .2)", // Adjust the opacity value (0.5) as desired
          position: "relative",
          "@media screen and (max-width: 600px)": {},
        }}
      >
        <Typography
          variant="h5"
          sx={{
            lineHeight: "2em",
            padding: "0 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em #39FF14",
            "@media screen and (max-width: 600px)": {
              padding: "5% 5% 5% 5%",
              fontSize: "1rem",
            },
          }}
        >
          Electron motion refers to the movement of electrons within an atom or
          in a conducting material, governed by the principles of quantum
          mechanics. Electrons exhibit wave-particle duality and can occupy
          specific energy levels or orbitals, leading to behaviors such as
          wave-like interference and probabilistic location within atomic
          structures.
        </Typography>
      </Box>
    </>
  );
}

export { Form3 };
