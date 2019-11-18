import React, { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Header } from "../components/Header";
import { ResponsiveStackGrid } from "../components/ResponsiveStackGrid";
import { ShowcaseCard } from "../components/ShowcaseCard";
import { showcases } from "../utils/showcases";

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 32px;
`;

const Index = () => {
  const stackGridRef = useRef(null);
  const onSizeChange = useCallback(
    () => stackGridRef && stackGridRef.current.updateLayout(),
    [stackGridRef]
  );
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
