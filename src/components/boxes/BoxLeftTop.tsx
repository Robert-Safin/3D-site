
const BoxLeftTop = () => {

  return (
    <mesh position={[-10, 28, 5]} castShadow receiveShadow>
      <boxGeometry args={[10, 60, 10]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  );
};

export default BoxLeftTop;
