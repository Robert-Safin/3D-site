'use client'
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const FifthView: FC = () => {





  return (
    <Html position={[0, 160, 0]} occlude transform rotation={[-Math.PI/2, 0, 0]}>
      <div className="bg-gray-900 bg-opacity-50 w-[300px] text-center">
        <h1 className="text-white">hi mum</h1>
        <Link href={'http://localhost:3000/'} className="text-red-400">
          refresh
        </Link>
      </div>
    </Html>
  );
};

export default FifthView;
