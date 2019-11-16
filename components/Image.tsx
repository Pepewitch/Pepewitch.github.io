import { Typography } from "antd";
import randomcolor from "randomcolor";
import React, { useState } from "react";
import styled from "styled-components";

const { Title } = Typography;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const ErrorImage = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${props => props.color};
  display: flex;
  min-width: 0;
  justify-content: center;
  align-items: center;
`;

export const Image = ({ title, ...props }) => {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <ErrorImage color={randomcolor({ seed: props.src, luminosity: "light" })}>
        {title && <Title style={{ marginBottom: 0 }}>{title}</Title>}
      </ErrorImage>
    );
  }
  return <StyledImg onError={() => setError(true)} {...props} />;
};
