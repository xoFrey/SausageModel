import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, OrthographicCamera, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Sausage(props) {
  const { nodes, materials } = useGLTF("/3D/sausage.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += -0.01;
    }
  });

  return (
    <group
      ref={ref}
      {...props}
      position={[-5, 3, 2]}
      rotation={[-0.2, 30, 0]}
      dispose={null}>
      <OrthographicCamera
        makeDefault={false}
        far={22.656}
        near={16.465}
        position={[-0.41, -1.058, 19.281]}
        rotation={[0, 0, 0]}
      />
      <mesh
        geometry={nodes.body.geometry}
        material={nodes.body.material}
        position={[0, -0.618, -0.719]}
        rotation={[-2.874, 0, 0]}
      />
      <mesh
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
        position={[-0.002, -2.122, -1.343]}
        rotation={[1, -Math.PI / 3, -3.094]}
        scale={0.245}
      />
      <instancedMesh
        args={[nodes.hands.geometry, nodes.hands.material, 2]}
        instanceMatrix={nodes.hands.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Mesh.geometry, nodes.Mesh.material, 2]}
        instanceMatrix={nodes.Mesh.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Sphere_2.geometry, nodes.Sphere_2.material, 17]}
        instanceMatrix={nodes.Sphere_2.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("/3D/sausage.glb");
