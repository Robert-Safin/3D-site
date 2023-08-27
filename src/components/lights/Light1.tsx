'use client'

import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";

const Light1: FC = () => {
  const light1ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (light1ref.current) {
      const time = state.clock.getElapsedTime();
      light1ref.current.position.y = 10 * Math.sin(time) + 10
    }
  });

  return (
    <pointLight ref={light1ref} intensity={300} position={[0, 0, 0]} castShadow color={'blue'} >
    </pointLight>
  );
}

export default Light1;
