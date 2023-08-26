'use client'

import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";

const Light3: FC = () => {
  const light3ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (light3ref.current) {
      const time = state.clock.getElapsedTime();
      light3ref.current.position.x = 10 * Math.sin(time);
    }
  });

  return (
    <pointLight ref={light3ref} intensity={300} position={[0, 30, 0]} castShadow color={'coral'} />
  );
}

export default Light3;
