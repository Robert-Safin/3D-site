"use client";

import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import * as THREE from "three";

const ThirdView: FC = () => {
  const { camera } = useThree();

  const [targetPosition] = useState(new THREE.Vector3(0, 120, -129));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionStartTime = useRef<number | null>(null);

  const navigateToNextView = () => {
    setIsTransitioning(true);
  };

  useFrame((state, delta) => {
    if (isTransitioning) {
      camera.position.lerpVectors(camera.position, targetPosition, delta / 2);
    }
  });
  return (
    <Html position={[0, 53.5, 56.5]} occlude transform rotation={[-0.8, 0, 0]}>
      <div className="bg-white bg-opacity-5 p-2 w-[350px] h-[600px] text-center rounded-md shadow-sm shadow-gray-500">
        <h1 className="text-white text-2xl font-bold my-2 ">
          `LIGHT REVOLUTION`
        </h1>
        <h1 className="text-white text-xl font-semibold my-2">
          (30 JULY 2022 - 13 AUGUST 2023)
        </h1>
        <p className="text-white text-md">
          Our first - now closed - exhibition featured works of Hungarian
          artists who are considered as pioneers in light art and in the use of
          light as an art form. The exhibiting artists, from modernism to
          contemporary, defined the institution`s identity by exploring a wide
          spectrum, including projection mapping, interactive and spatial
          design, holographic experiments, data art, and other techno-cultural
          practices.
        </p>
        <br />

        <p className="text-white text-sm">
          Curators: László L. Laki, Viola Lukács, Márton Orosz, Szabolcs Vida,
          László Zsolt Bordos
        </p>

        <Image src={'/img/banner.jpeg'} alt='banner' width={4000} height={4000} className="h-40 w-full object-cover"/>

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

export default ThirdView;
