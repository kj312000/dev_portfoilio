import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Ring({ radius, color }: { radius: number; color: string }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
}

export default function TokenFlow() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={1} />
      
      {/* Central Sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#14F195" />
      </mesh>

      {/* Rings */}
      <Ring radius={1.2} color="#9945FF" />
      <Ring radius={2} color="#00FFA3" />
      <Ring radius={3} color="#FFD700" />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
