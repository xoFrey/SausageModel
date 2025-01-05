import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Canvas
        style={{ background: "white", height: "100%", width: "100%" }}
        camera={{ position: [5, 5, 5], fov: 60 }} // Optional: Set the camera position
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
