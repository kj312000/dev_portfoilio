import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";

export default function TorusScene() {
  return (
    <Canvas camera={{ position: [0, 3, 8], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1.2} />

      {/* Rotating Torus */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#9945FF"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Ground grid */}
      <Grid args={[10, 10]} cellSize={0.5} cellThickness={0.5} />

      <OrbitControls autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
