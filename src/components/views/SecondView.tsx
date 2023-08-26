import { Html } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { FC, useEffect, useRef, useState } from "react"
import * as THREE from "three";

const SecondView:FC = () => {
  const { camera } = useThree();

  const [targetPosition] = useState(new THREE.Vector3(0, 100, 200));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  const navigateToNextView = () => {
    setIsTransitioning(true);
  };

  useFrame((state,delta) => {
    if (isTransitioning) {
        camera.position.lerpVectors(camera.position, targetPosition, delta);
    }

    if (ref.current) {

    }
  });
  return (
    <Html position={[0,30,-60]}occlude transform rotation={[0.2,Math.PI, 0]} ref={ref}>

      <div className="bg-gray-900 bg-opacity-50 w-[300px] text-center">
      <h1 className="text-white">hi mum</h1>
      <button className="text-red-400" onClick={navigateToNextView}>
          proceed
        </button>
      </div>


    </Html>
  )
}


export default SecondView
