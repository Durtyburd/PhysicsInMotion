import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { handleClick } from "../lib/handleClick.js";
import FirstChart from "./FirstChart.js";

function Form3() {
  // State for user-inputted wave variables
  const [stateV0, setStateV0] = useState(0);
  const [statebw, setStatebw] = useState(0);
  const [statesig, setStatesig] = useState(0);
  const [stateke, setStateke] = useState(0);
  const [chartData, setChartData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q1 = handleClick(stateV0, statebw, statesig, stateke);
    setChartData(q1);
  };

  return (
    <div style={{ marginTop: "1%", backgroundColor: "#ededeb" }}>
      <h2 align="center">Create your own wave function</h2>
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
        <Box align="center">
          <button
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
        </Box>
      </form>
      {chartData && <FirstChart q1={chartData} />}
    </div>
  );
}

export { Form3 };
