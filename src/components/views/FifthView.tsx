import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const FifthView: FC = () => {

  return (
    <Html position={[0, 160, 0]} occlude transform rotation={[-Math.PI/2, 0, 0]}>
      <div className="bg-gray-900 bg-opacity-50 w-[300px] text-center">
        <h1 className="text-white">hi mum</h1>
        <button className="text-red-400" >
          proceed
        </button>
      </div>
    </Html>
  );
};

export default FifthView;
