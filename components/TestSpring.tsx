import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";

const AnimatedDiv = animated.div as any;

export const Slider = ({ children = [] }) => {
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${
      delta[0] < 0 ? "#f093fb 0%, #f5576c" : "#96fbc4 0%, #f9f586"
    } 100%)`,
    size: down ? 1.1 : 1,
    immediate: name => down && name === "x"
  });
  const avSize = x.interpolate({
    map: Math.abs,
    range: [50, 300],
    output: ["scale(0.5)", "scale(1)"],
    extrapolate: "clamp"
  } as any);
  return (
    <>
      <AnimatedDiv {...bind()} class="item" style={{ background: bg }}>
        <AnimatedDiv
          class="av"
          style={
            {
              transform: avSize,
              justifySelf: delta[0] < 0 ? "end" : "start"
            } as any
          }
        />
        <AnimatedDiv
          class="fg"
          style={{
            transform: interpolate(
              [x, size],
              (x, s) => `translate3d(${x}px,0,0) scale(${s})`
            )
          }}
        >
          {children}
        </AnimatedDiv>
      </AnimatedDiv>
      <style jsx global>
        {`
          html,
          body,
          #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
            user-select: none;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
              helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
              sans-serif;
            background: transparent;
          }

          #root {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #f0f0f0;
          }

          .item {
            position: relative;
            width: 300px;
            height: 100px;
            pointer-events: auto;
            transform-origin: 50% 50% 0px;
            padding-left: 32px;
            padding-right: 32px;
            box-sizing: border-box;
            display: grid;
            align-items: center;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);
          }

          .fg {
            cursor: -webkit-grab;
            background-color: #272727;
            color: rgba(255, 255, 255, 0.8);
            position: absolute;
            height: 100%;
            width: 100%;
            display: grid;
            align-items: center;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.2);
            font-size: 3em;

            font-weight: 600;
            transition: box-shadow 0.75s;
          }

          .fg:active {
            cursor: -webkit-grabbing;
            box-shadow: 0px 15px 30px -5px rgba(0, 0, 0, 0.4);
          }

          .fg > * {
            pointer-events: none;
          }

          .av {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: white;
          }
        `}
      </style>
    </>
  );
};
