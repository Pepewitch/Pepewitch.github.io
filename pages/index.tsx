import React, { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Header } from "../components/Header";
import { ResponsiveStackGrid } from "../components/ResponsiveStackGrid";
import { ShowcaseCard } from "../components/ShowcaseCard";
import profileImage from "../public/images/profile.jpg";
import { showcases } from "../utils/showcases";

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 32px;
`;

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

const Index = () => {
  const { stackGridRef, onSizeChange } = useStackGrid();
  const [appearedShowcases, setAppearedShowcases] = useState([]);
  useEffect(() => {
    const showShowcases = async () => {
      const appeared = [];
      for (const showcase of showcases) {
        appeared.push(showcase);
        setAppearedShowcases([...appeared]);
        await new Promise(res => setTimeout(() => res(), 200));
      }
    };
    showShowcases();
  }, []);

  return (
    <Container>
      <Header />
      {/* <img src={profileImage} alt="" /> */}
      <ResponsiveStackGrid gridRef={stackGridRef}>
        {appearedShowcases.map(showcase => (
          <ShowcaseCard
            key={showcase.key}
            showcase={showcase}
            onSizeChange={onSizeChange}
          />
        ))}
      </ResponsiveStackGrid>
    </Container>
  );
};

export default Index;
