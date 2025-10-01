import Layout from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CharacterModel from "../components/CharacterModel";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Hi, I’m Kaustubh 👋
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Full-stack MERN/MEAN developer building modern web & blockchain apps.
        </p>

        {/* 3D Character in bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none">
          {/* <Canvas camera={{ position: [0, 1, 4] }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <CharacterModel />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Canvas> */}
        </div>
      </div>
    </Layout>
  );
}
