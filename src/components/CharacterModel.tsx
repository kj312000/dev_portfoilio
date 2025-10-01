"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CharacterModel() {
  const { scene, animations } = useGLTF("/models/hello.glb");
  const mixer = useRef<THREE.AnimationMixer>();

  // Remove big cube meshes automatically
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Hide/remove cubes or planes
        if (child.name.toLowerCase().includes("cube") || child.name.toLowerCase().includes("plane")) {
          child.visible = false;
        }
      }
    });

    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />;
}
