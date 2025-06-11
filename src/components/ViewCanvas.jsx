// Full-screen Canvas with violet sky, loading HeroScene
"use client";

import { Canvas }   from "@react-three/fiber";
import { Suspense } from "react";
import HeroScene    from "./HeroScene";

export default function ViewCanvas() {
  return (
    <Canvas
      style={{
        position:      "fixed",
        top:           0,
        left:          "50%",
        transform:     "translateX(-50%)",
        width:         "100vw",
        height:        "100vh",
        pointerEvents: "none",
        zIndex:        30,
      }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{ fov: 50, position: [0, 0, 7] }} // wider FOV to keep icons on-screen
    >
      {/* Violet 3D sky */}
      <color attach="background" args={["#533f5b"]} />

      {/* Lighting */}
      <ambientLight intensity={1.5} />
      <spotLight intensity={2.5} position={[1, 1, 1]} />

      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </Canvas>
  );
}
