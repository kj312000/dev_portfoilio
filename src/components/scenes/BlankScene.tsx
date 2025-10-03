import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function BlankScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />

      {/* Controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
