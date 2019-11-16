import { Form, Typography } from "antd";
import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { CommendBox } from "../components/CommendBox";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { ResponsiveStackGrid } from "../components/ResponsiveStackGrid";
import { Showcase, showcases } from "../configs/showcases";

const { Title, Paragraph } = Typography;

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 32px;
`;

const ShowcaseBody = styled.div`
  padding: 16px;
`;

interface IShowcaseCardProps {
  showcase: Showcase;
  onSizeChange: () => any;
}

const ShowcaseCard = ({ showcase, onSizeChange }: IShowcaseCardProps) => {
  const { href, src, title, description } = showcase;
  return (
    <Card>
      <a href={href} target="_blank">
        <Image src={src} title={title} />
      </a>
      <ShowcaseBody>
        <a href={href} target="_blank">
          <Title level={4}>{title}</Title>
        </a>
        {description && (
          <Paragraph type="secondary" ellipsis={{ rows: 4 }}>
            {description}
          </Paragraph>
        )}
        <CommendBox
          user={{}}
          showcase={showcase}
          onSubmit={e => {
            console.log(e);
          }}
        />
      </ShowcaseBody>
    </Card>
  );
};

const Index = () => {
  const stackGridRef = useRef(null);
  const onSizeChange = useCallback(
    () => stackGridRef && stackGridRef.current.updateLayout(),
    [stackGridRef]
  );
  return (
    <Container>
      <Header />
      <ResponsiveStackGrid ref={stackGridRef}>
        {showcases.map((showcase, index) => (
          <ShowcaseCard
            key={showcase.title + index}
            showcase={showcase}
            onSizeChange={onSizeChange}
          />
        ))}
      </ResponsiveStackGrid>
    </Container>
  );
};

export default Index;
