import React, { useMemo } from "react";
import sizeMe from "react-sizeme";
import StackGrid, { transitions } from "react-stack-grid";

const { fadeUp, fadeDown } = transitions;

export const ResponsiveStackGrid = sizeMe()(({ size, ...props }: any) => {
  const { width } = size;
  const columnWidth = useMemo(() => {
    if (width < 500) return "100%";
    else if (width < 768) return "50%";
    else return 350;
  }, [width]);
  return (
    <div style={{ padding: "0 16px" }}>
      <StackGrid
        columnWidth={columnWidth}
        gutterWidth={16}
        gutterHeight={16}
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
});
