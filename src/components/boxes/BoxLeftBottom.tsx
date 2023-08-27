'use client'


const BoxLefBottom = () => {
  return (
    <mesh position={[15, 28, 20]} castShadow receiveShadow>
    <boxGeometry args={[20, 60, 20]}/>
    <meshStandardMaterial
        color={0xffffff}
        opacity={0.5}
        transparent={true}
        metalness={0}
        roughness={0}
      />
    </mesh>
  )
}

export default BoxLefBottom;
