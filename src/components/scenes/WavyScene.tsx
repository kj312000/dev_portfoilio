import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function WavyPlane() {
  const meshRef = useRef<any>();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.z = t * 0.05;
    const positions = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.sin(i / 5 + t) * 0.1;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <meshStandardMaterial color="#00ffaa" wireframe />
    </mesh>
  );
}

export default function WavyScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <WavyPlane />
      <OrbitControls />
    </Canvas>
  );
}
