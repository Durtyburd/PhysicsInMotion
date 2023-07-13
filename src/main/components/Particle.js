import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -999,
        },
        particles: {
          number: {
            value: 15,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#a00fbd",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
              speed: 5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 500,
            color: "#a00fbd",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              //Change to false to remove weird particle reload affect
              enable: true,
              mode: ["grab"],
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 700,
              line_linked: {
                opacity: 1,
              },
            },
          },
        },
        retina_detect: true,
        background: {
          color: "#010101",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
}

export { Particle };
