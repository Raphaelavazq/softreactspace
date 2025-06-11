import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight:   "100vh",
        display:     "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:  "center",
        textAlign:   "center",
        padding:     "2rem",
        position:    "relative",
        zIndex:      40,             // sit above the canvas
        color:       "var(--color-text-invert)",
      }}
    >
      <h1
        style={{
          fontSize:   "2.5rem",      // a bit smaller
          fontWeight: "bold",
          maxWidth:   "800px",
          lineHeight: 1.3,
        }}
      >
        It’s okay having emotions all over the place sometimes...
        <br />
        Let’s do something about it.
      </h1>
    </section>
  );
}
