'use client'

import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";

const Light2: FC = () => {
  const light2ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (light2ref.current) {
      const time = state.clock.getElapsedTime();
      light2ref.current.position.z = 5 * Math.sin(time);

    }
  });

  return (
    <pointLight ref={light2ref} intensity={300} position={[0, 30, 0]} castShadow color={'green'} >
       {/* <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color={'blue'} />
      </mesh> */}
    </pointLight>
  );
}

export default Light2;
