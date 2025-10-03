import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Particles({ count = 2000 }) {
  const meshRef = useRef<any>();
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });
  const positions = Array.from({ length: count }, () => [
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
  ]);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length}
          array={new Float32Array(positions.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#14F195" size={0.05} />
    </points>
  );
}

export default function ParticleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov:30 }}>
      <ambientLight intensity={0.3} />
      <Particles />
      <OrbitControls autoRotate />
    </Canvas>
  );
}
