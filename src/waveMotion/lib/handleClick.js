import { getWaveVariables } from "./getWaveVariables.js";
import { parameters } from "./parameters.js";
import { defineArrays } from "./defineArrays.js";
import { timeStep } from "./timeStep.js";

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
}

export { handleClick };
