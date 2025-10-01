import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Line } from "@react-three/drei";

function Block({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} floatIntensity={1}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function BlockchainBlocks() {
  const positions: [number, number, number][] = [
    [-3, -1, 0],
    [0, 0, 0],
    [3, 2, 0],
  ];

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {positions.map((pos, i) => (
        <Block key={i} position={pos} color="#14F195" />
      ))}

      <Line points={positions} color="#9945FF" lineWidth={2} />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
