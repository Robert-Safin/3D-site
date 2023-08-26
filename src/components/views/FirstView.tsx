import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const FirstView: FC = () => {
  const { camera } = useThree();

  const [targetPosition] = useState(new THREE.Vector3(0, 30, -70));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionStartTime = useRef<number | null>(null);

  const navigateToNextView = () => {
    setIsTransitioning(true);
  };

  useFrame((state, delta) => {
    if (isTransitioning) {
        camera.position.lerpVectors(camera.position, targetPosition, delta);
    }
  });

  return (
    <Html position={[35, 1, 0]} occlude transform rotation={[0, Math.PI / 2, 0]}>
      <div className="bg-gray-900 bg-opacity-50 w-[300px] text-center">
        <h1 className="text-white">hi mum</h1>
        <button className="text-red-400" onClick={navigateToNextView}>
          proceed
        </button>
      </div>
    </Html>
  );
};

export default FirstView;