// Animated, instanced bubbles rising & wrapping, Fizzi-style
"use client";

import { useRef, useMemo } from "react";
import { useFrame }        from "@react-three/fiber";
import * as THREE          from "three";

export default function Bubbles({
  count      = 150,
  area       = 40,
  size       = 0.5,        // smaller spheres
  speedRange = [0.2, 0.8], // drifting speeds
  opacity    = 0.4,
}) {
  const mesh = useRef();

  // Precompute positions & speeds
  const { positions, speeds } = useMemo(() => {
    const posArr = [], spdArr = [];
    for (let i = 0; i < count; i++) {
      posArr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * area,
          (Math.random() - 0.5) * area,
          (Math.random() - 0.5) * area
        )
      );
      spdArr.push(speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]));
    }
    return { positions: posArr, speeds: spdArr };
  }, [count, area, speedRange]);

  // Animate rising & wrap
  useFrame((_, delta) => {
    positions.forEach((pos, i) => {
      pos.y += speeds[i] * delta;
      if (pos.y > area / 2) pos.y = -area / 2;
      const m = new THREE.Matrix4().makeTranslation(pos.x, pos.y, pos.z);
      mesh.current.setMatrixAt(i, m);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  // Brand accent color
  const bubbleColor = useMemo(() => {
    const c = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim();
    return c || "#FABA9E";
  }, []);

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial
        color={bubbleColor}
        transparent
        opacity={opacity}
        depthWrite={false}
        depthTest={false}
      />
    </instancedMesh>
  );
}
