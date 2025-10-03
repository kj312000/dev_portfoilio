import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Tunnel() {
  const ref = useRef<any>();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[4, 0.2, 16, 100]} />
      <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1.5} />
    </mesh>
  );
}

export default function TunnelScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 10]} intensity={2} />
      <Tunnel />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
