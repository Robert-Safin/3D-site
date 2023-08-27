'use client'

const BoxLeftTop = () => {

  return (
    <mesh position={[-10, 28, 5]} castShadow receiveShadow>
      <boxGeometry args={[10, 60, 10]} />
      <meshStandardMaterial
        color={0xffffff}
        opacity={0.5}
        transparent={true}
        metalness={0}
        roughness={0}
      />
    </mesh>
  );
};

export default BoxLeftTop;
