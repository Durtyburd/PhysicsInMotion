function getWaveVariables(
  sim_flag,
  imax,
  passedC,
  passedCW,
  passedf0,
  passedAmp
) {
  while (true) {
    if (sim_flag === "l") {
      console.log("ok this is light");
      return {
        c: 3e8, // speed of light in air [m/s]
        cw: 3e8 / 1.33, // speed of light in water [m/s]
        f0: 8e9, // freq. of source [Hz]
        amp: 0.8, // source amplitude
        ibd: Math.round(imax / 3.5), // location of material boundary
      };
    } else if (sim_flag === "s") {
      console.log("ok this is sound");
      return {
        c: 343, // speed of sound in water [m/s]
        cw: 1498, // speed of sound in air [m/s]
        f0: 10000, // freq. of source [Hz]
        amp: 0.4, // source amplitude
        ibd: Math.round(imax / 4), // location of material boundary
      };
    } else if (sim_flag === "cyo") {
      /////////////////////////////////////////////////// <---- create your own wave???
      return {
        c: passedC, // speed of your wave in water
        cw: passedCW, // speed of your sound in air
        f0: passedf0, // freq. of source [Hz]
        amp: passedAmp, // source amplitude
        ibd: Math.round(imax / 5), // location of material boundary
      };
    }
  }
}

export { getWaveVariables };
