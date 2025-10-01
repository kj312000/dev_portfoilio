import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

export default function Starfield() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <Stars 
          radius={80}   // how far stars spread
          depth={50}    // starfield depth
          count={8000}  // number of stars
          factor={4}    // star size factor
          fade
          speed={2}     // ✨ make them move slowly
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
