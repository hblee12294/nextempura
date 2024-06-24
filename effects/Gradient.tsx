"use client";

import { useRef, useCallback } from "react";
import { P5CanvasInstance, type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export function Gradient() {
  const stageRef = useRef<HTMLDivElement>(null);

  const sketch: Sketch = useCallback((p5: P5CanvasInstance) => {
    const stage = stageRef.current;

    if (!stage) return;

    const REDS = [
      "#e45064",
      "#e45064",
      "#e65d6c",
      "#ec6a5f",
      "#e13750",
      "#c03671",
      "#643d7a",
      "#284671",
      "#284671",
      "#284671",
    ];
    const YELLOWS = ["#ef9f50", "#f2c061", "#f3bf61"];
    const LIGHT_BLUES = ["#b7cbef", "#e2eaf4", "#e2eaf4"];
    const DARK_BLUES = ["#3271ac", "#4282b6", "#7abcec"];
    const backgroundColor = "#ffffff";
    const width = window.innerWidth;
    const height = window.innerHeight;
    let frameCount = 0;

    let delta = 0;
    let delta1 = 0;
    let delta2 = 0;
    let delta3 = 0;

    p5.setup = () => {
      p5.createCanvas(stage.clientWidth, stage.clientHeight, p5.WEBGL);
    };

    p5.draw = () => {
      frameCount += 1;

      let bg = p5.color(backgroundColor);
      p5.background(bg);

      drawDarkBlues(DARK_BLUES, -width, -height * 0.7, p5.PI / 150, 4);
      drawDarkBlues(DARK_BLUES, -width, -400, p5.PI / 20, 2);
      drawLightBlues(LIGHT_BLUES);
      drawYellows(YELLOWS);
      drawReds(REDS);
    };

    p5.windowResized = () => {
      p5.resizeCanvas(stage.clientWidth, stage.clientHeight);
    };

    function drawDarkBlues(
      colors: string[],
      _x: number,
      _y: number,
      _r: number,
      _s: number
    ) {
      p5.push();

      p5.rotate(_r);

      p5.translate(_x, _y);
      p5.scale(_s, _s);

      p5.noStroke();

      let size = 100;
      let x = -(size / 2);
      let y = 0;

      p5.beginShape(p5.TRIANGLE_STRIP);

      for (let i = 0; i < colors.length - 1; i++) {
        let j = 0;

        while (j < width * 2 + size / 2) {
          let waveSize = 15;
          let y0 = y + p5.sin(delta3 + j + x) * waveSize;

          delta3 += 0.000008;

          let y2 = y + size * 1.2 + p5.sin(delta3 + j + x) * waveSize;

          if (j % 2 == 0) {
            p5.fill(colors[i]);
            p5.vertex(x, y0); //left 1
            p5.fill(colors[i + 1]);
            p5.vertex(x + size / 2, y2); //tip 3
          }

          x += size / 2;
          j += size / 2;
        }
        x = -(size / 2);
        y += size;
      }

      p5.endShape(p5.CLOSE);

      p5.pop();
    }

    function drawLightBlues(colors: string[]) {
      p5.push();

      p5.rotate(p5.PI / 20);

      p5.translate(-width / 2, -200);
      p5.scale(2, 2);

      p5.noStroke();

      let size = 100;
      let x = -(size / 2);
      let y = 0;

      p5.beginShape(p5.TRIANGLE_STRIP);

      for (let i = 0; i < colors.length - 1; i++) {
        let j = 0;

        while (j < width * 2 + size / 2) {
          let waveSize = 15;
          let y0 = y + p5.sin(delta2 + j + x) * waveSize;
          y0 += p5.sin((delta2 + j + x) * 10) * 5;

          delta2 += 0.00001;

          let y2 = y + size * 1.2 + p5.sin(delta2 + j + x) * waveSize;
          y2 += p5.sin((delta2 + j + x) * 10) * 5;

          if (j % 2 == 0) {
            p5.fill(colors[i]);
            p5.vertex(x, y0); //left 1
            p5.fill(colors[i + 1]);
            p5.vertex(x + size / 2, y2); //tip 3
          }

          x += size / 2;
          j += size / 2;
        }
        x = -(size / 2);
        y += size;
      }

      p5.endShape(p5.CLOSE);

      p5.pop();
    }

    function drawYellows(colors: string[]) {
      p5.push();

      p5.rotate(p5.PI / 10);

      p5.translate(-width / 2, -20);
      p5.scale(2, 2);

      p5.noStroke();

      let size = 50;
      let x = -(size / 2);
      let y = 0;

      p5.beginShape(p5.TRIANGLE_STRIP);

      for (let i = 0; i < colors.length - 1; i++) {
        let j = 0;

        while (j < width * 2 + size / 2) {
          let waveSize = 10;
          let y0 = y + p5.sin(delta1 + j + x) * waveSize;

          delta1 += 0.00001;

          let y2 = y + size * 1.2 + p5.sin(delta1 + j + x) * waveSize;

          if (j % 2 == 0) {
            p5.fill(colors[i]);
            p5.vertex(x, y0); //left 1
            p5.fill(colors[i + 1]);
            p5.vertex(x + size / 2, y2); //tip 3
          }

          x += size / 2;
          j += size / 2;
        }
        x = -(size / 2);
        y += size;
      }

      p5.endShape(p5.CLOSE);

      p5.pop();
    }

    function drawReds(colors: string[]) {
      p5.push();

      p5.rotate(p5.PI / 6);

      p5.translate(-width, 0);
      p5.scale(1, 1);

      p5.noStroke();

      let size = 100;
      let x = -(size / 2);
      let y = 0;

      p5.beginShape(p5.TRIANGLE_STRIP);

      for (let i = 0; i < colors.length - 1; i++) {
        let j = 0;

        while (j < width * 2 + size / 2) {
          let waveSize = 20;

          let d = delta + j + x;
          let y0 = y + p5.sin(d) * waveSize;
          y0 += p5.sin(d * 10) * 10;

          delta += 0.000005;

          let d2 = delta + j + x;
          let y2 = y + size * 1.2 + p5.sin(d2) * waveSize;
          y2 += p5.sin(d2 * 10) * 10;

          if (j % 2 == 0) {
            p5.fill(colors[i]);
            p5.vertex(x, y0); //left 1
            p5.fill(colors[i + 1]);
            p5.vertex(x + size / 2, y2); //tip 3
          }

          x += size / 2;
          j += size / 2;
        }
        x = -(size / 2);
        y += size;
      }

      p5.endShape(p5.CLOSE);

      p5.pop();
    }
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
