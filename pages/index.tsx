import React, { useState } from "react";
import StackGrid, { transitions } from "react-stack-grid";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

const { fadeUp, fadeDown } = transitions;

const Container = styled.div`
  padding-top: 80px;
`;

const StyledCard = styled(Card)`
  height: 480px;
`;

const Showcase = () => {
  return <StyledCard>1234</StyledCard>;
};

const Index = () => {
  return (
    <Container>
      <Header />
      <StackGrid
        columnWidth={300}
        gutterWidth={16}
        gutterHeight={16}
        appear={fadeUp.appear}
        appeared={fadeUp.appeared}
        enter={fadeUp.enter}
        entered={fadeUp.entered}
        leaved={fadeDown.leaved}
      >
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
        <Showcase />
      </StackGrid>
    </Container>
  );
};

export default Index;
