import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function FloatingSphereScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <pointLight position={[-3, -3, -3]} intensity={0.5} />

      {/* Floating sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#14F195"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      <OrbitControls autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
