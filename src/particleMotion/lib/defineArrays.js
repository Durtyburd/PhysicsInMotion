import { zeros, matrix } from "mathjs";

function defineArrays(nmax, imax) {
  // Define arrays
  const u = matrix(zeros(nmax, imax)); // initializing all fields to be zero
  const array = u.toArray(); // turning u matrix into an array
  return { array };
}

export { defineArrays };
