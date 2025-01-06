import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Sausage } from "./Sausage.jsx";
import { AmbientLight } from "three";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const Experience = () => {
  // const spotLightRef = useRef();
  // const helperRef = useRef();

  // useEffect(() => {
  //   if (spotLightRef.current) {
  //     helperRef.current = new THREE.SpotLightHelper(spotLightRef.current);
  //     spotLightRef.current.parent.add(helperRef.current);
  //   }

  //   return () => {
  //     if (helperRef.current) {
  //       helperRef.current.removeFromParent();
  //       helperRef.current.dispose();
  //     }
  //   };
  // }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
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

      <Sausage />
    </>
  );
};

export default Experience;
