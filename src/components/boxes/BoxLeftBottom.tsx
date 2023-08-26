'use client'


const BoxLefBottom = () => {
  return (
    <mesh position={[15, 28, 20]} castShadow receiveShadow>
    <boxGeometry args={[20, 60, 20]}/>
      <meshStandardMaterial color={"gray"} />
    </mesh>
  )
}

export default BoxLefBottom;
