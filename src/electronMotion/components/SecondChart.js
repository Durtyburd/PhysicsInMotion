import Plotly from "plotly.js-dist-min";
import React, { useState, useEffect } from "react";
import { ThirdChart } from "./ThirdChart.js";
import { getMaxValue } from "../lib/getMaxValue.js";
import { scroller } from "react-scroll";

///////////////////////////////////////////////////////////////////////////////////////
function SecondChart({ q1 }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
  };

  useEffect(() => {
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
    // traces for fixed lines
    const trace1 = {
      x: [],
      y: [],
      line: {
        color: "black",
      },
      name: "|Ψ|^2",
    };

    const trace2 = {
      x: [...xArr2[0]],
      y: [...yArr2[0]],
      line: {
        color: "purple",
      },
      name: "barrier",
    };

    // Chart data
    const data = [trace1, trace2];

    // Chart layout
    const layout = {
      title: "Schrödinger Solution",
      displayModeBar: false, // Remove the mode bar
      font: { size: 18 },
      xaxis: {
        title: "position (Å)",
        range: [],
        fixedrange: true,
        tickcolor: "black",
        color: "black",
        automargin: true,
      },
      yaxis: {
        title: "normalized magnitude",
        range: [0, 1],
        tickcolor: "black",
        zerolinecolor: "#ffffff",
        color: "black",
        automargin: true,
      },
      plot_bgcolor: "#ffffff",
      paper_bgcolor: "#ffffff",
    };

    // Create the initial graph
    Plotly.newPlot("chart2", data, layout, {
      responsive: true,
    }).then(function () {
      // Animate the graph
      Plotly.animate("chart2", finalFrames, {
        color: "black",
        frame: { duration: 10 },
        transition: { duration: 1000 },
        mode: "immediate",
      });
    });
  }, [q1]);

  return (
    <>
      <div padding="5% 0 5% 0" id="chart2"></div>
      <button
        onClick={(e) =>
          scroller.scrollTo(
            "electron-motion-third-chart",
            {
              smooth: true,
              offset: -400,
              duration: 500,
            },
            handleSubmit(e)
          )
        }
      >
        Generate Final Wave Function
      </button>
      <div className="electron-motion-third-chart"></div>

      {isButtonClicked && <ThirdChart q1={q1} />}
    </>
  );
}

export { SecondChart };
