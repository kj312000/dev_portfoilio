import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

export default function CodeMatrix() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <Text
        fontSize={0.35}
        color="#00FFA3"
        position={[0, 0, 0]}
        maxWidth={4}
        lineHeight={1.2}
      >
        {`function hello() {\n  console.log("Hello Blockchain!");\n}\n\nconst tx = await sendTransaction();`}
      </Text>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
