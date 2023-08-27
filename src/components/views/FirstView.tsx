"use client";

import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import Link from "next/link";
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
      camera.position.lerpVectors(camera.position, targetPosition, delta / 2);
    }
  });

  return (
    <Html
      position={[30, 1, 0]}
      occlude
      transform
      rotation={[0, Math.PI / 2, 0]}
    >
      <div className="bg-white p-2 bg-opacity-5 w-[350px] h-[600px] rounded-md shadow-sm shadow-gray-500">
        <div className="flex justify-between">
          <Image src={"/logo.jpeg"} alt="logo" width={100} height={100} />
          <div className="flex space-x-4">
            <Link href={'https://www.facebook.com/lambudapest/'} target="_blank">
            <AiOutlineFacebook className="text-white text-3xl" />
            </Link>
            <Link href={'https://www.instagram.com/lambudapest/'} target="_blank">
            <AiOutlineInstagram className="text-white text-3xl" />
            </Link>
            <Link href={'https://www.youtube.com/@lightartmuseumbudapest4857/videos'} target="_blank">
            <AiOutlineYoutube className="text-white text-3xl" />
            </Link>
          </div>
        </div>

        <h1 className="text-white text-2xl font-bold my-4">
          NEW EXHIBITION FROM SEPTEMBER 2023
        </h1>
        <p className="text-white text-md">
          WELCOME TO THE LIGHT ART MUSEUM BUDAPEST! OUR WEBSITE AND MUSEUM SPACE
          IS CURRENTLY CLOSED DUE TO PREPARATION WORKS FOR A NEW EXHIBITION AND
          WILL BE REOPENED FROM SEPTEMBER 2023 AFTER A SUCCESSFUL YEAR WITH MORE
          THAN 200.000 LOCAL AND INTERNATIONAL VISITORS.
        </p>

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

export default FirstView;
