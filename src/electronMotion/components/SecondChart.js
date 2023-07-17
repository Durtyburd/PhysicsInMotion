import Plotly from "plotly.js-dist-min";
import React, { useState, useEffect } from "react";
import { ThirdChart } from "./ThirdChart.js";
import { getMaxValue } from "../lib/getMaxValue.js";
import { scroller } from "react-scroll";

///////////////////////////////////////////////////////////////////////////////////////
function SecondChart({ q1, finalFrames, xArr2, yArr2 }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
  };

  useEffect(() => {
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

    // Renders final chart immediately
    // thirdChart(q1);
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
