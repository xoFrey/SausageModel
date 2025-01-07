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
      <Sausage />
    </>
  );
};

export default Experience;
