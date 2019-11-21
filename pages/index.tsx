import React from "react";

import { Divider } from "antd";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { ResponsiveStackGrid } from "../components/ResponsiveStackGrid";
import { ShowcaseCard } from "../components/ShowcaseCard";
import { showcases } from "../utils/showcases";

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 32px;
`;

const Index = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Divider />
      <ResponsiveStackGrid items={showcases} interval={200}>
        {(onSizeChange, appearedShowcases) =>
          appearedShowcases.map(showcase => (
            <ShowcaseCard
              key={showcase.key}
              showcase={showcase}
              onSizeChange={onSizeChange}
            />
          ))
        }
      </ResponsiveStackGrid>
    </Container>
  );
};

export default Index;
