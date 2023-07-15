import React, { useState, useRef } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { handleClick } from "../lib/handleClick.js";
import { WaveMotionFirstChart } from "./WaveMotionFirstChart.js";

function Form2() {
  // State for user-inputted wave variables
  const [stateC, setStateC] = useState(0);
  const [stateCW, setStateCW] = useState(0);
  const [statef0, setStatef0] = useState(0);
  const [stateAmp, setStateAmp] = useState(0);
  const [framesData, setFramesData] = useState(null);
  const [ibdData, setibdData] = useState(null);
  const [imaxData, setimaxData] = useState(null);

  const handleSubmit = (e, waveType) => {
    e.preventDefault();
    if (waveType === "l") {
      const { frames, ibd, imax } = handleClick(
        waveType,
        stateC,
        stateCW,
        statef0,
        stateAmp
      );
      setFramesData(frames);
      setibdData(ibd);
      setimaxData(imax);
    } else if (waveType === "s") {
      const { frames, ibd, imax } = handleClick(
        waveType,
        stateC,
        stateCW,
        statef0,
        stateAmp
      );
      setFramesData(frames);
      setibdData(ibd);
      setimaxData(imax);
    } else {
      const { frames, ibd, imax } = handleClick(
        "cyo",
        stateC,
        stateCW,
        statef0,
        stateAmp
      );
      setFramesData(frames);
      setibdData(ibd);
      setimaxData(imax);
    }
  };
  function scroll() {
    if (stateC === 0 || stateCW === 0 || stateAmp === 0 || statef0 === 0) {
      alert("Please input values.");
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  const ref = useRef(null);

  return (
    <>
      <div
        style={{
          backgroundColor: "#ededeb",
          margin: "0 5% 0 5%",
          paddingBottom: "2%",
        }}
      >
        <Box align="center" padding="0 5% 0 5%">
          <Typography variant="h4" padding="0% 0% 2% 0%">
            Please choose a wave that you would like to see simulated.
          </Typography>
          <br />
          <button
            onClick={(e) => {
              handleSubmit(e, "l");
            }}
          >
            Light
          </button>
          <button
            onClick={(e) => {
              handleSubmit(e, "s");
            }}
          >
            Sound
          </button>
        </Box>
      </div>
      <div
        style={{
          margin: "0 5% 0 5%",
          paddingTop: "1%",
          backgroundColor: "#ededeb",
        }}
      >
        <h2 align="center">Create your own wave</h2>
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
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Speed in air - m/s"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value > 100 && e.target.value <= 10000) ||
                  e.target.value === "."
                ) {
                  setStateC(e.target.value);
                } else {
                  alert(
                    "Please input a value between 100 and 10,000, but not 0."
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
              label="Speed in water - m/s"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value > 100 && e.target.value <= 10000) ||
                  e.target.value === "."
                ) {
                  setStateCW(e.target.value);
                } else {
                  alert(
                    "Please input a value between 100 and 10,000, but not 0."
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
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Frequency of source - Hz"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value > 100 && e.target.value <= 10000) ||
                  e.target.value === "."
                ) {
                  setStatef0(e.target.value);
                } else {
                  alert(
                    "Please input a value between 100 and 10,000, but not 0."
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
              label="Source amplitude"
              sx={{ margin: "1% 1% 1% 1%" }}
              onChange={(e) => {
                if (
                  (e.target.value >= -1 && e.target.value <= 1) ||
                  e.target.value === "."
                ) {
                  setStateAmp(e.target.value);
                } else {
                  alert("Please input a value between 0 and 1, but not 0.");
                  e.target.value = 0.1;
                }
              }}
              required
            />
          </Box>
          <Box align="center">
            <button
              onClick={scroll}
              color="primary"
              type="submit"
              style={{
                alignSelf: "center",
                marginTop: "1%",
                marginBottom: "1%",
              }}
            >
              Generate
            </button>
            <Typography
              ref={ref}
              sx={{ paddingBottom: "2%", alignSelf: "center" }}
            >
              *NOTE: The area on the left side of the vertical line represents
              air and the area on the right side represents water.*
            </Typography>
          </Box>
        </form>
        {imaxData && (
          <WaveMotionFirstChart
            framesData={framesData}
            ibdData={ibdData}
            imaxData={imaxData}
          />
        )}
      </div>
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
            padding: "2% 10% 2% 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em #39FF14",
            "@media screen and (max-width: 600px)": {
              padding: "10% 5% 10% 5%",
              fontSize: "1.5rem",
            },
          }}
        >
          Wave motion is when disturbances or energy travel through a medium or
          space. Waves can be seen in different forms, like sound or water
          waves. By studying waves, we learn about their properties and how they
          behave, which is important in areas like communication and optics.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            lineHeight: "2em",
            padding: "2% 10% 0 10%",
            textShadow: "1px 1px 4px black, 0 0 .3em red",
            "@media screen and (max-width: 600px)": {
              padding: "10% 5% 0 5%",
              fontSize: "2rem",
            },
          }}
        >
          So what are you seeing in the chart?
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
          Well, if you clicked the light or sound button. You are essentially
          rendering a visual representation of that wave. Then showing how fast
          that wave moves through a medium and how it reflects when changing
          mediums. Lastly, the x-axis represents time steps and y-axis
          represents the spacial points.
        </Typography>
      </Box>
    </>
  );
}

export { Form2 };
