import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import sizeMe from "react-sizeme";
import StackGrid, { transitions } from "react-stack-grid";

const { fadeUp, fadeDown } = transitions;

const useStackGrid = () => {
  const stackGridRef = useRef(null);
  const onSizeChange = useCallback(
    () => stackGridRef && stackGridRef.current.updateLayout(),
    [stackGridRef]
  );
  useEffect(() => {
    const updateView = () => {
      requestAnimationFrame(() => {
        // Fix stack grid resize bug by adding some delay before updateView again
        setTimeout(() => {
          onSizeChange();
        }, 20);
      });
    };
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);
  return { stackGridRef, onSizeChange };
};

const useIntervalAppear = (items, interval) => {
  const [appearedItems, setAppearedItems] = useState([]);
  useEffect(() => {
    if (interval) {
      const showShowcases = async () => {
        const appeared = [];
        for (const item of items) {
          appeared.push(item);
          setAppearedItems([...appeared]);
          await new Promise(res => setTimeout(() => res(), interval));
        }
      };
      showShowcases();
    } else {
      setAppearedItems(items);
    }
  }, [items]);
  return appearedItems;
};

export const ResponsiveStackGrid = sizeMe()(
  ({ size, children, items, interval, ...props }: any) => {
    const { width } = size;
    const columnWidth = useMemo(() => {
      if (width < 500) return "100%";
      else if (width < 768) return "50%";
      else return 320;
    }, [width]);
    const { stackGridRef, onSizeChange } = useStackGrid();
    const appearedItems = useIntervalAppear(items, interval);
    return (
      <div style={{ padding: "0 16px" }}>
        <StackGrid
          gridRef={grid => (stackGridRef.current = grid)}
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
        >
          {children(onSizeChange, appearedItems)}
        </StackGrid>
      </div>
    );
  }
);
