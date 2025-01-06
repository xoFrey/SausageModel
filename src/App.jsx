import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Stars from "./components/Stars";

function App() {
  return (
    <div className='canvas bg'>
      <div className='stars'>
        <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
          <Stars />
        </Canvas>
      </div>

      <div className='experience'>
        <Canvas
          camera={{ position: [5, 5, 5], fov: 60 }} // Optional: Set the camera position
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
