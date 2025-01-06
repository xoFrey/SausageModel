import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Stars from "./components/Stars";
import { OrbitControls } from "@react-three/drei";
import { Ghost } from "./components/Ghost";
import Navbar from "./components/Navbar";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

function App() {
  const [isActive, setIsActive] = useState("sausage");
  3;
  const [isClicked, setIsClicked] = useState("");

  const ModelArray = ["sausage", "ghost"];

  const handleOnClick = () => {
    //  If isActive == sausage => index+1 für "next"-function
    //  If left Arrow is clicked => index-1 für prev-function
    //  Animationen nach links und rechts

    setTimeout(() => {
      setIsActive(model);
    }, 500);
    setIsClicked(model);
  };

  console.log(isClicked);

  return (
    <>
      <Navbar
        isActive={isActive}
        setIsActive={setIsActive}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      />
      <div className='canvas'>
        <div className='stars'>
          <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
            <Stars />
          </Canvas>
        </div>

        {isActive == "sausage" ? (
          <div
            className={`${
              isClicked == "ghost" ? "sausageExit" : ""
            } experience `}>
            <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
              <Experience />
            </Canvas>
          </div>
        ) : (
          <div
            className={`${isClicked == "sausage" ? "ghostExit" : ""} ghost `}>
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
        <div
          className='arrowleft'
          onClick={() => handleOnClick("sausage")}>
          <TfiArrowLeft
            color='white'
            size={"50px"}
          />
        </div>
        <div
          className='arrowright'
          onClick={() => handleOnClick("ghost")}>
          <TfiArrowRight
            color='white'
            size={"50px"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
