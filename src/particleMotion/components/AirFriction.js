import { useEffect, useRef, useState } from "react";
import { Engine, Render, Bodies, World } from "matter-js";

function AirFriction() {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const [buttonClick, setButtonClick] = useState(false);
  const [addedCircles, setaddedCircles] = useState([]);
  const [cw, setCw] = useState(0);
  const ch = 350;

  useEffect(() => {
    // Update the cw value when the scene.current element is available
    if (scene.current) {
      setCw(scene.current.clientWidth);
    }
  }, []);

  function handleClick() {
    setButtonClick(true);
  }

  function endClick() {
    setButtonClick(false);
    World.remove(engine.current.world, addedCircles); // Remove the circles from the world
    setaddedCircles([]); // Clear the addedCircles state
  }

  const circleOptions = {
    isStatic: false,
    // frictionAir: 0.001,
    restitution: 1,
    render: {
      fillStyle: "#BF40BF",
    },
  };

  const rectangleOptions = {
    isStatic: true,
  };

  //Function to add circles to world
  const addcirclesToWorld = () => {
    const circles = [
      Bodies.circle(cw / 2 - 200, 10, 25, circleOptions),
      Bodies.circle(cw / 2 - 150, 10, 25, circleOptions),
      Bodies.circle(cw / 2 - 150, 10, 25, circleOptions),
      Bodies.circle(cw / 2 - 100, 10, 25, circleOptions),
      Bodies.circle(cw / 2 - 50, 10, 25, circleOptions),
      Bodies.circle(cw / 2, 10, 25, circleOptions),
      Bodies.circle(cw / 2 + 50, 10, 25, circleOptions),
      Bodies.circle(cw / 2 + 100, 10, 25, circleOptions),
      Bodies.circle(cw / 2 + 150, 10, 25, circleOptions),
      Bodies.circle(cw / 2 + 150, 10, 25, circleOptions),
      Bodies.circle(cw / 2 + 200, 10, 25, circleOptions),
    ];
    setaddedCircles(circles); // Store the added circles in state
    World.add(engine.current.world, circles);
  };

  // Add walls to the world (only once on initial render)
  useEffect(() => {
    if (cw > 0) {
      const render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: "black",
        },
      });

      World.add(engine.current.world, [
        Bodies.rectangle(cw / 2, -10, cw, 20, rectangleOptions),
        Bodies.rectangle(-10, ch / 2, 20, ch, rectangleOptions),
        Bodies.rectangle(cw / 2, ch + 10, cw, 20, rectangleOptions),
        Bodies.rectangle(cw + 10, ch / 2, 20, ch, rectangleOptions),
      ]);

      Engine.run(engine.current);
      Render.run(render);

      return () => {
        Render.stop(render);
        World.clear(engine.current.world);
        Engine.clear(engine.current);
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};
      };
    }
  }, [cw, ch]);

  useEffect(() => {
    if (buttonClick) {
      addcirclesToWorld();
    }
  }, [buttonClick]);

  return (
    <div
      style={{
        margin: "0 5% 0 5%",
        "@media screen and (max-width: 600px)": {
          padding: "0 5% 0 5%",
          fontSize: "1rem",
        },
      }}
    >
      <div
        ref={scene}
        id="friction-box"
        style={{ width: "100%", height: "100%" }}
      />
      <button onClick={handleClick}>Start Animation</button>
      <button onClick={endClick}>Clear Animation</button>
    </div>
  );
}

export { AirFriction };
