import React, { useRef } from "react";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { clamp } from "lodash";

const pages = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

export const SwipableDiv = () => {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, i => ({
    x: i * global.window.innerWidth,
    scale: 1,
    display: "block"
  }));
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (down && distance > global.window.innerWidth / 2)
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        );
      cancel(index.current);
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x =
          (i - index.current) * global.window.innerWidth + (down ? mx : 0);
        const scale = down ? 1 - distance / global.window.innerWidth / 2 : 1;
        return { x, scale, display: "block" };
      });
    }
  );
  return (
    <>
      {props.map(({ x, display, scale }, i) => (
        <animated.div {...bind()} key={i} style={{ display, x }}>
          <animated.div
            style={{ scale, backgroundImage: `url(${pages[i]})` }}
          />
          <style global jsx>{`
            * {
              box-sizing: border-box;
            }

            html,
            body {
              overscroll-behavior-y: contain;
              margin: 0;
              padding: 0;
              height: 100%;
              width: 100%;
              user-select: none;
              font-family: -apple-system, BlinkMacSystemFont, avenir next,
                avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
                segoe ui, arial, sans-serif;
              position: fixed;
              overflow: hidden;
            }

            #root {
              position: fixed;
              overflow: hidden;
              width: 100%;
              height: 100%;
              cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
                  39 39,
                auto;
            }

            #root > div {
              position: absolute;
              width: 100vw;
              height: 100vh;
              will-change: transform;
            }

            #root > div > div {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
              width: 100%;
              height: 100%;
              will-change: transform;
              box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
                0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
            }
          `}</style>
        </animated.div>
      ))}
    </>
  );
};
