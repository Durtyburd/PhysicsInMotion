import Plotly from "plotly.js-dist-min";
import { useEffect } from "react";

function WaveMotionFirstChart({ framesData, ibdData, imaxData }) {
  useEffect(() => {
    const trace1 = {
      x: [ibdData, ibdData],
      y: [-1, 1],
      line: {
        color: "black",
      },
      name: " ",
    };

    let trace2 = {
      y: [-1, 1],
      x: [ibdData, ibdData],
      line: {
        color: "#1a5f7a",
      },
      name: " ",
    };

    // Chart data
    const data = [trace1, trace2];

    // Chart layout
    const layout = {
      title: "Wave rendered...",
      displayModeBar: false, // Remove the mode bar
      font: { size: 18 },
      xaxis: {
        title: "x",
        range: [1, imaxData],
        fixedrange: true,
        tickcolor: "black",
        color: "black",
        automargin: true,
      },
      yaxis: {
        title: "u",
        range: [-1, 1],
        name: " ",
        fixedrange: true,
        tickcolor: "black",
        zerolinecolor: "black",
        zerolinewidth: 2, // Adjust the thickness of the zeroline
        color: "black",
        automargin: true,
      },
      plot_bgcolor: "#ededeb",
      paper_bgcolor: "#ededeb",
    };

    // Create the initial graph
    Plotly.newPlot("chart", data, layout, {
      responsive: true,
    }).then(function () {
      // Animate the graph
      Plotly.animate("chart", framesData, {
        color: "black",
        frame: { duration: 10 },
        transition: { duration: 1000 },
        mode: "immediate",
      });
    });
  }, [framesData, ibdData, imaxData]);

  return (
    <>
      <div id="chart"></div>
    </>
  );
}

export { WaveMotionFirstChart };
