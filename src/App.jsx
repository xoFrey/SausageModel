import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Stars from "./components/Stars";
import { OrbitControls } from "@react-three/drei";
import { Ghost } from "./components/Ghost";
import Navbar from "./components/Navbar";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import { Sausage } from "./components/Sausage";

function App() {
  const ModelArray = ["sausage", "ghost"];
  const [isActive, setIsActive] = useState("sausage");
  const [isClicked, setIsClicked] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const modelComponents = {
    sausage: Sausage,
    ghost: Ghost,
  };

  const ActiveModel = modelComponents[isActive];

  const handleRightArrow = () => {
    setAnimationDirection("right");
    const newIndex = (currentIndex + 1) % ModelArray.length;
    setIsClicked(ModelArray[newIndex]);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsActive(ModelArray[newIndex]);
    }, 500);
  };

  const handleLeftArrow = () => {
    setAnimationDirection("left");
    const newIndex = (currentIndex - 1 + ModelArray.length) % ModelArray.length;
    setIsClicked(ModelArray[newIndex]);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsActive(ModelArray[newIndex]);
    }, 500);
  };
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

        <div
          className={`${
            isClicked && isClicked !== isActive
              ? `${isActive}ExitTo${
                  animationDirection === "right" ? "Right" : "Left"
                }`
              : ""
          } ${isActive} ${
            animationDirection === "right"
              ? `${isActive}EnterFromLeft`
              : `${isActive}EnterFromRight`
          }`}>
          <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
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
            <ActiveModel />
          </Canvas>
        </div>

        <div
          className='arrowleft'
          onClick={() => handleLeftArrow()}>
          <TfiArrowLeft
            color='white'
            size={"50px"}
          />
        </div>
        <div
          className='arrowright'
          onClick={() => handleRightArrow()}>
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
