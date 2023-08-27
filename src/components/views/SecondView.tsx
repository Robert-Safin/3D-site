"use client";

import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import * as THREE from "three";

const SecondView: FC = () => {
  const { camera } = useThree();

  const [targetPosition] = useState(new THREE.Vector3(0, 100, 200));
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
      position={[0, 23, -55]}
      occlude
      transform
      rotation={[0.3, Math.PI, 0]}
      ref={ref}
    >
      <div className="bg-white p-2 bg-opacity-5 w-[350px] h-[700px] rounded-md shadow-sm shadow-gray-500">
        <h1 className="text-white text-2xl font-bold my-2 ">`SUPERLUMINAL`</h1>
        <h1 className="text-white text-xl font-semibold my-2">
          (FROM SEPTEMBER 2023)
        </h1>
        <h1 className="text-white text-xl my-2">
          EXHIBITION IS COMING SOON
        </h1>
        <p className="text-white text-md">
          The upcoming exhibition will be featuring more than 40
          internationally-listed artists from around the world aiming to present
          light as a physical and natural phenomenon as well as an indicator of
          technological development.
        </p>
        <br />
        <p className="text-white text-md">
          Light itself (its wave and particle nature, its physical and optical
          characteristics, its biological significance, etc.) is at the heart of
          the artworks and the various themes they explore - from supernovae to
          black holes, from artificial nature to parallel universes, from
          programmed neural networks to radiating glass objects, or from the
          Northern Lights encased in crystalline structures to the choreography
          of light on the retina - seek new perspectives for a deeper
          understanding of the nature of light, within or beyond the realms of
          visibility.{" "}
        </p>
        <br />

        <p className="text-gray-300 text-sm">
          Curators: Barnabás Bencsik, Borbála Szalai
        </p>
        <p className="text-gray-300 text-sm">
        Curator assistant: Dalma Kovács
        </p>

        <h1 className="text-white text-1xl font-bold my-4 ">
        TICKETS ARE COMING SOON
        </h1>

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

export default SecondView;
