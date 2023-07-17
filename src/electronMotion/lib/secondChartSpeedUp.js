import { getMaxValue } from "./getMaxValue.js";

function secondChartSpeedUp(q1) {
  const xArr1 = [];
  const yArr1 = [];
  const xArr2 = [];
  const yArr2 = [];
  const firstFrames = [];

  for (let nn = 0; nn < q1.tt; nn++) {
    q1.fdtdUpdate();
    if (nn % 350 === 0) {
      //change by increments of 50 to speed up (50 was initial value)
      // Wave // they should only iterate 219 times
      xArr1.push(q1.lx.map((value) => value / q1.angstromStar));
      yArr1.push(q1.psimag.map((value) => value / getMaxValue(q1.psimag)));

      // Barrier // they should only iterate 219 times
      xArr2.push(q1.lx.map((value) => value / q1.angstromStar));
      yArr2.push(q1.Vx.map((value) => value / getMaxValue(q1.Vx)));
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log(yArr1);
  // frames for animation
  for (let i = 0; i < xArr1.length; i++) {
    firstFrames.push({
      data: [
        {
          x: [...xArr1[i]],
          y: [...yArr1[i]],
        },
      ],
    });
  }
  const finalFrames = [...firstFrames];
  return { xArr2, yArr2, finalFrames };
}
export { secondChartSpeedUp };
