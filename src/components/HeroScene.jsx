// Combines bubble layers + three upright emotion icons
"use client";

import Bubbles         from "./Bubbles";
import FloatingEmotion from "./FloatingEmotion";

export default function HeroScene() {
  return (
    <>
      {/* Fizzi-style bubble fields */}
      <Bubbles count={200} area={60} size={0.3}  speedRange={[0.3, 0.6]} opacity={0.25}/>
      <Bubbles count={120} area={50} size={0.8}  speedRange={[0.5, 1.0]} opacity={0.35}/>
      <Bubbles count={60}  area={40} size={1.6}  speedRange={[0.8, 1.4]} opacity={0.45}/>

      {/* Centered emotion icons */}
      <FloatingEmotion image="/emotions/sadness.png" position={[-0.6, 0, 0]} />
      <FloatingEmotion image="/emotions/calm.png"    position={[ 0,    0, 0]} />
      <FloatingEmotion image="/emotions/love.png"    position={[ 0.6,  0, 0]} />
    </>
  );
}
