import React, { useState, useRef } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { handleClick } from "./WaveMotionGenerator.js";
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div style={{ marginTop: "1%" }}>
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
                (e.target.value > -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStateC(e.target.value);
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
            label="Speed in water - m/s"
            sx={{ margin: "1% 1% 1% 1%" }}
            onChange={(e) => {
              if (
                (e.target.value > -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStateCW(e.target.value);
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
                (e.target.value > -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStatef0(e.target.value);
              } else {
                alert(
                  "Please input a value between 0 and 100,000,000,000,000, but not 0."
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
            *NOTE: The area on the left side of the vertical line represents air
            and the area on the right side represents water.*
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
  );
}

export { Form2 };
