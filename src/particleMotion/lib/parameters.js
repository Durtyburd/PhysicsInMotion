// FD parameters
function parameters(c, cw, f0, ibd, imax) {
  const lambda0 = Math.min(c, cw) / f0; // wavelength of source wave [m]
  const dx = lambda0 / 20; // space grid step
  const dt = dx / Math.max(c, cw); // time grid step
  const nmax = Math.round((0.5 * (imax * dx)) / Math.min(c, cw) / dt); // number of time steps
  const w = 2 * Math.PI * f0; // angular frequency
  const tau = (nmax * dt) / 10; // half width of source [s]
  const t0 = 3 * tau; // time delay at source [s]
  const s1 = (c * dt) / dx; // update coeff. for left half space
  const s2 = (cw * dt) / dx; // update coeff. for right half space
  return {
    dt,
    nmax,
    w,
    tau,
    t0,
    s1,
    s2,
  };
}

export { parameters };
