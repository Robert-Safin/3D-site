'use client'
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useState } from "react";
import * as THREE from "three";

const EntryPoint: FC = () => {
  const { camera } = useThree();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [alpha, setAlpha] = useState(0);
  const targetPosition = new THREE.Vector3(-510, 0, 0);
  const speed = 0.005;

  useFrame((_, delta) => {
    if (alpha < 1) {
      camera.position.lerp(targetPosition, speed);
      setIsTransitioning(true);
      setAlpha(prevAlpha => prevAlpha + speed);
    }


  });

  return <></>;
};

export default EntryPoint;
