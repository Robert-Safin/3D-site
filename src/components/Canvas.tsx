"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { FC, useRef, useState } from "react";
import { Box, Environment, Html, OrbitControls } from "@react-three/drei";
import Light1 from "./lights/Light1";
import Light3 from "./lights/Light3";
import Light2 from "./lights/Light2";
import BoxLeftTop from "./boxes/BoxLeftTop";
import BoxRightTop from "./boxes/BoxRightTop";
import BoxRightBottom from "./boxes/BoxRightBottom";
import BoxLefBottom from "./boxes/BoxLeftBottom";
import FirstView from "./views/FirstView";
import SecondView from "./views/SecondView";
import ThirdView from "./views/ThirdView";
import ForthView from "./views/ForthView";
import FifthView from "./views/FifthView";
import EntryPoint from "./views/EntryPoint";

interface Props {}

const Three: FC<Props> = (props) => {

  return (
    <div className="flex mx-auto bg-black w-screen h-screen">
      <Canvas camera={{ position: [1000, 1, 0] }} shadows>

        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <EntryPoint/>
        <Light1 />
        <Light2 />
        <Light3 />

        <BoxLeftTop />
        <BoxLefBottom />
        <BoxRightTop />
        <BoxRightBottom />

        <FirstView/>
        <SecondView/>
        <ThirdView/>
        <ForthView/>
        <FifthView/>



        <mesh rotation-x={-Math.PI / 2} receiveShadow position={[0, -0.5, 0]}>
          <circleGeometry args={[1000]} />
          <meshStandardMaterial/>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Three;
