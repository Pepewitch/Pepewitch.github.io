import React, { useMemo } from "react";
import sizeMe from "react-sizeme";
import StackGrid, { transitions } from "react-stack-grid";

const { fadeUp, fadeDown } = transitions;

export const ResponsiveStackGrid = sizeMe()(
  ({ size, gridRef, ...props }: any) => {
    const { width } = size;
    const columnWidth = useMemo(() => {
      if (width < 500) return "100%";
      else if (width < 768) return "50%";
      else return 320;
    }, [width]);
    return (
      <div style={{ padding: "0 16px" }}>
        <StackGrid
          gridRef={grid => (gridRef.current = grid)}
          columnWidth={columnWidth}
          gutterWidth={24}
          gutterHeight={24}
          appear={fadeUp.appear}
          appeared={fadeUp.appeared}
          enter={fadeUp.enter}
          entered={fadeUp.entered}
          leaved={fadeDown.leaved}
          monitorImagesLoaded
          {...props}
        />
      </div>
    );
  }
);
