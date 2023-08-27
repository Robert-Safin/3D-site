"use client";

import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import * as THREE from "three";

const ForthView: FC = () => {
  const { camera } = useThree();

  const [targetPosition] = useState(new THREE.Vector3(0, 430, 0));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  const navigateToNextView = () => {
    setIsTransitioning(true);
  };

  useFrame((state, delta) => {
    if (isTransitioning) {
      camera.position.lerpVectors(camera.position, targetPosition, delta / 2);
    }

    if (ref.current) {
    }
  });
  return (
    <Html
      position={[0, 70, 0]}
      occlude
      transform
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="bg-white bg-opacity-5 p-2 w-[350px] h-[770px]  rounded-md shadow-sm shadow-gray-500">
        <h1 className="text-white text-2xl font-bold my-2 ">Light Revolution</h1>
        <div className="flex flex-col space-y-4 h-[650px] overflow-y-auto">
        <Image src={'/img/1.jpeg'} alt="photo" width={4000} height={4000} className="w-full h-48 object-cover shadow shadow-white"/>
        <Image src={'/img/2.jpeg'} alt="photo" width={4000} height={4000} className="w-full h-48 object-cover shadow shadow-white"/>
        <Image src={'/img/3.jpg'} alt="photo" width={4000} height={4000} className="w-full h-48 object-cover shadow shadow-white"/>
        <Image src={'/img/4.jpg'} alt="photo" width={4000} height={4000} className="w-full h-48 object-cover shadow shadow-white"/>
        <Image src={'/img/5.jpeg'} alt="photo" width={4000} height={4000} className="w-full h-48 object-cover shadow shadow-white"/>
        <Image src={'/img/6.jpeg'} alt="photo" width={4000} height={4000} className="w-full h-48 object-cover shadow shadow-white"/>
        </div>
        <MdOutlineNavigateNext
          className="text-white text-3xl absolute bottom-2 right-2"
          onClick={navigateToNextView}
        >
          proceed
        </MdOutlineNavigateNext>
      </div>
    </Html>
  );
};

export default ForthView;
