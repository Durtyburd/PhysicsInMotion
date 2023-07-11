import React, { useRef } from "react";
import { getWaveVariables } from "../lib/getWaveVariables.js";
import { parameters } from "../lib/parameters.js";
import { defineArrays } from "../lib/defineArrays.js";
import { timeStep } from "../lib/timeStep.js";
import { Box, Typography } from "@mui/material";

function handleClick(waveType, passedC, passedCW, passedf0, passedAmp) {
  // Declaring variables from function
  const imax = 800;
  const { c, cw, f0, amp, ibd } = getWaveVariables(
    waveType,
    imax,
    passedC,
    passedCW,
    passedf0,
    passedAmp
  );
  const { dt, nmax, w, tau, t0, s1, s2 } = parameters(c, cw, f0, ibd, imax);
  const { array } = defineArrays(nmax, imax);
  const { frames } = timeStep(
    amp,
    ibd,
    imax,
    dt,
    nmax,
    w,
    tau,
    t0,
    s1,
    s2,
    array
  );
  return { frames, ibd, imax };

  // renderChart(frames, ibd, imax);
}

function WaveMotionGenerator() {
  function scroll() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  const ref = useRef(null);

  return (
    <>
      <Box
        align="center"
        padding="3% 5% 0 5%"
        backgroundColor="#ededeb"
        z-index="99"
      >
        <Typography variant="h2" padding="0% 0% 2% 0%">
          <strong>Wave Generator</strong>
        </Typography>
        <Typography variant="h4" padding="0% 0% 2% 0%">
          Please choose a wave that you would like to see simulated.
        </Typography>
        <br />
        <button
          onClick={() => {
            handleClick("l");
            scroll();
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            handleClick("s");
            scroll();
          }}
        >
          Sound
        </button>
        <div ref={ref}></div>
      </Box>
    </>
  );
}

export { WaveMotionGenerator, handleClick };
