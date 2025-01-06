import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Stars from "./components/Stars";
import { OrbitControls, Preload } from "@react-three/drei";
import { Ghost } from "./components/Ghost";
import Navbar from "./components/Navbar";

function App() {
  const [isActive, setIsActive] = useState("sausage");
  return (
    <>
      <Navbar
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div className='canvas'>
        <div className='stars'>
          <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
            <Stars />
          </Canvas>
        </div>

        {isActive == "sausage" ? (
          <div className='experience'>
            <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
              <Experience />
            </Canvas>
          </div>
        ) : (
          <div className='ghost'>
            <Canvas>
              <ambientLight intensity={1.2} />
              <spotLight
                intensity={100}
                distance={100}
                position={[7, 3, 7]}
              />
              <spotLight
                intensity={50}
                distance={10}
                angle={0.5}
                position={[-5, 3, -4]}
              />
              <OrbitControls
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enableZoom={false}
              />
              <Ghost scale={3} />
            </Canvas>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
