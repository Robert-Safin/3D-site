'use client'




const BoxRightBottom = () => {
  return (
    <mesh position={[15, 28, -20]} castShadow receiveShadow>
    <boxGeometry args={[15, 60, 15]}/>
      <meshStandardMaterial color={"gray"} />
    </mesh>
  )
}

export default BoxRightBottom;
