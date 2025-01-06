import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000), { radius: 1.2 }),
    [],
  );

  useFrame(() => {
    ref.current.rotation.x += 0.0001;
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

export default Stars;
