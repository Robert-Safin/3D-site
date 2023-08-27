"use client";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { VscDebugRestart } from "react-icons/vsc";
const FifthView: FC = () => {
  return (
    <Html
      position={[0, 155, 0]}
      occlude
      transform
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="bg-white bg-opacity-5 p-2 w-[350px] h-[600px] rounded-md shadow-sm shadow-gray-500 space-y-4">
        <div className="border-b pb-4">
          <h1 className="text-white text-xl mb-4">Contact</h1>
          <p className="text-gray-300">+36 70 575 3999</p>
          <p className="text-gray-300">For general inquires: info@lam.xyz</p>
          <p className="text-gray-300">Media request: press@lam.xyz</p>
        </div>

        <div className="border-b pb-4">
          <h1 className="text-white text-xl mb-4">Location</h1>
          <p className="text-gray-300">1054 Budapest, Hold utca 13.</p>
        </div>

        <div className="border-b pb-4">
          <h1 className="text-white text-xl mb-4">Opening Hours</h1>
          <p className="text-gray-300">Temporarily closed until</p>
          <p className="text-gray-300">6 September 2023</p>
        </div>

        <div className="border-b pb-4">
          <h1 className="text-white text-xl mb-4">Impressum</h1>
          <p className="text-gray-300">Privacy Policy</p>
          <p className="text-gray-300">Terms & Conditions</p>
          <p className="text-gray-300">Cookie Policy (EU)</p>
        </div>

        <Link
          href="https://r3f-demo-tau.vercel.app/"
          className="text-white text-3xl absolute bottom-2 right-2"
        >
          <VscDebugRestart />
        </Link>
      </div>
    </Html>
  );
};

export default FifthView;
