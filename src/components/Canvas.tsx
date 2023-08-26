"use client";
import { Canvas, useFrame } from "@react-three/fiber";

import { FC, useRef } from "react";
import { Box, Environment, Html, OrbitControls } from "@react-three/drei";
import Light1 from "./lights/Light1";
import Light3 from "./lights/Light3";
import Light2 from "./lights/Light2";
import BoxLeftTop from "./boxes/BoxLeftTop";
import BoxRightTop from "./boxes/BoxRightTop";
import BoxRightBottom from "./boxes/BoxRightBottom";
import BoxLefBottom from "./boxes/BoxLeftBottom";
interface Props {}

const Three: FC<Props> = (props) => {
  return (
    <div className="flex mx-auto bg-black w-screen h-screen">
      <Canvas camera={{ position: [50, 3, 0] }} shadows>
        {/* <ambientLight intensity={0.1} /> */}
        <OrbitControls />

        <Light1 />
        <Light2 />
        <Light3 />

        <BoxLeftTop />
        <BoxLefBottom />
        <BoxRightTop />
        <BoxRightBottom />

        {"floor"}
        <mesh rotation-x={-Math.PI / 2} receiveShadow position={[0, -0.5, 0]}>
          <circleGeometry args={[1000]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Three;
