"use client";

import { useRef, useCallback } from "react";
import { P5CanvasInstance, type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export function Gradient() {
  const stageRef = useRef<HTMLDivElement>(null);

  const sketch: Sketch = useCallback((p5: P5CanvasInstance) => {
    const stage = stageRef.current;

    if (!stage) return;

    p5.setup = () =>
      p5.createCanvas(stage.clientWidth, stage.clientHeight, p5.WEBGL);

    p5.draw = () => {
      p5.background(250);
      p5.normalMaterial();
      p5.push();
      p5.rotateZ(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.01);
      p5.rotateY(p5.frameCount * 0.01);
      p5.plane(100);
      p5.pop();
    };

    p5.windowResized = () => {
      p5.resizeCanvas(stage.clientWidth, stage.clientHeight);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        fontSize: 0,
      }}
      ref={stageRef}
    >
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
