import React from "react";
import { NavbarMain } from "./main/components/NavbarMain.js";
import { WaveMotionGenerator } from "./waveMotion/components/WaveMotionGenerator.js";
import { Form2 } from "./waveMotion/components/Form2.js";
import { ElectronMotionGenerator } from "./electronMotion/components/ElectronMotionGenerator.js";
import { Form3 } from "./electronMotion/components/Form3.js";
import "../src/stylesheets/app.css";
import { MainAbout } from "./main/components/MainAbout.js";
import { ParticleMotionGenerator } from "./particleMotion/components/ParticleMotionGenerator.js";
import { Particle } from "./main/components/Particle.js";

function App() {
  return (
    <>
      <div>
        <NavbarMain />
        <MainAbout />
        {/*  */}
        <ParticleMotionGenerator />
        {/*  */}
        <WaveMotionGenerator />
        <Form2 />
        {/*  */}
        <ElectronMotionGenerator />
        <Form3 />
      </div>
      <Particle />
    </>
  );
}

export { App };
