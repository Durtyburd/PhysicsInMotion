import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-dist-min";
import { SecondChart } from "./SecondChart.js";
import { getMaxValue } from "../lib/getMaxValue.js";
import { Box, Typography } from "@mui/material";

function FirstChart({ q1 }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
  };

  useEffect(() => {
    const trace1xArr = [];
    const trace1yArr = [];
    const trace2xArr = [];
    const trace2yArr = [];
    const trace3xArr = [];
    const trace3yArr = [];
    const trace4xArr = [];
    const trace4yArr = [];

    for (let i = 0; i < q1.ll; i++) {
      trace1xArr.push(q1.lx[i] / q1.angstromStar);
      trace1yArr.push(q1.psimag[i] / getMaxValue(q1.psimag));
      trace2xArr.push(q1.lx[i] / q1.angstromStar);
      trace2yArr.push(q1.Vx[i] / getMaxValue(q1.Vx));
      trace3xArr.push(q1.lx[i] / q1.angstromStar);
      trace3yArr.push(q1.psii[i] / getMaxValue(q1.psii));
      trace4xArr.push(q1.lx[i] / q1.angstromStar);
      trace4yArr.push(q1.psir[i] / getMaxValue(q1.psir));
    }

    // Traces for fixed lines
    const trace1 = {
      x: [...trace1xArr],
      y: [...trace1yArr],
      line: {
        color: "black",
      },
      name: "|Ψ|^2",
    };

    let trace2 = {
      x: [...trace2xArr],
      y: [...trace2yArr],
      line: {
        color: "purple",
      },
      name: "barrier",
    };

    const trace3 = {
      x: [...trace3xArr],
      y: [...trace3yArr],
      line: {
        color: "orange",
      },
      name: "𝕴[Ψ]",
    };

    let trace4 = {
      x: [...trace4xArr],
      y: [...trace4yArr],
      line: {
        color: "green",
      },
      name: "ℜ[Ψ]",
    };

    // Chart data
    const data = [trace1, trace2, trace3, trace4];

    // Chart layout
    const layout = {
      title: "Initial wavefunctions (normalized)",
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
        title: "Ψ",
        range: [-1, 1],
        tickcolor: "black",
        zerolinecolor: "#ffffff",
        color: "black",
        automargin: true,
      },
      plot_bgcolor: "#ffffff",
      paper_bgcolor: "#ffffff",
    };

    // Create the initial graph
    const chart = document.getElementById("chart1");
    Plotly.newPlot(chart, data, layout, {
      responsive: true,
    });

    // Renders next graph immediately
    // secondChart(q1);
  }, [q1]);

  return (
    <>
      <div id="chart1"></div>
      <Box align="center" padding="5% 0 5% 0">
        <Typography sx={{ paddingBottom: "2%", alignSelf: "center" }}>
          *NOTE: Once you press the button it may take a few seconds for the
          next chart to render.*
        </Typography>
        <button onClick={handleSubmit}>
          Generate Schrödinger Equation Solution
        </button>

        {isButtonClicked && <SecondChart q1={q1} />}
      </Box>
    </>
  );
}

export default FirstChart;
