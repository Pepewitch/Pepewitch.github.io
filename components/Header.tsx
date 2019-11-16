import { Avatar } from "antd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 0 16px;
  align-items: center;
  height: 56px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

export const Header = () => {
  return (
    <Container>
      <Avatar size="large" icon="user" />
    </Container>
  );
};
