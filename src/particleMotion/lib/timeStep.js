import { dotPow, dotMultiply, pow } from "mathjs";

function timeStep(amp, ibd, imax, dt, nmax, w, tau, t0, s1, s2, array) {
  // x values
  const xArr = [];

  // FDTD time stepping loop
  for (let n = 1; n < nmax - 1; n++) {
    xArr.push(n);

    // Define the source
    const t = dt * n - t0;
    const sourceValue = dotMultiply(
      amp * Math.sin(w * t),
      Math.exp(-dotPow(t, 2) / pow(tau, 2))
    );

    // Boundary Conditions
    // At the left boundary: a source pulse propagating from left to right
    array[n][0] = sourceValue;

    // At the right boundary: all fields = 0 (reflecting boundary)
    array[n][imax] = 0;

    // For loop to update u in space
    for (let i = 1; i < imax - 1; i++) {
      if (i < ibd) {
        const newValue =
          Math.pow(s1, 2) *
            (array[n][i + 1] - 2 * array[n][i] + array[n][i - 1]) +
          2 * array[n][i] -
          array[n - 1][i];
        array[n + 1][i] = newValue;
      } else {
        const newValue =
          Math.pow(s2, 2) *
            (array[n][i + 1] - 2 * array[n][i] + array[n][i - 1]) +
          2 * array[n][i] -
          array[n - 1][i];

        array[n + 1][i] = newValue;
      }
    }
  }

  // removing first and last column of array
  array.shift();
  array.pop();

  // initializing new array for chart y-values
  const newArr = [...array];

  // below assigns y-values
  const frames = [];
  for (let i = 0; i < newArr.length; i++) {
    frames.push({ data: [{ x: i, y: [...newArr[i]] }] });
  }

  return { frames };
}

export { timeStep };
