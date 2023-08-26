


const BoxRightTop = () => {
  return (
    <mesh position={[-20, 28, -15]} castShadow receiveShadow>
    <boxGeometry args={[25, 60, 25]}/>
      <meshStandardMaterial color={"gray"} />
    </mesh>
  )
}

export default BoxRightTop;
