import { Html } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { FC, useEffect, useRef, useState } from "react"
import * as THREE from "three";

const ForthView:FC = () => {
  const { camera } = useThree();

  const [targetPosition] = useState(new THREE.Vector3(0, 430, 0));
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
    <Html position={[0,70,0]}occlude transform rotation={[-1.6,0,0]}>

      <div className="bg-gray-900 bg-opacity-50 w-[300px] text-center">
      <h1 className="text-white">hi mum</h1>
      <button className="text-red-400" onClick={navigateToNextView}>
          navigate
        </button>
      </div>


    </Html>
  )
}


export default ForthView
