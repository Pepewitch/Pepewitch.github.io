import {
  Avatar,
  Comment,
  Divider,
  Form,
  Icon,
  Tooltip,
  Typography
} from "antd";
import moment from "moment";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { Card } from "../components/Card";
import { CommendBox } from "../components/CommendBox";
import { CommentList } from "../components/CommentList";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { ResponsiveStackGrid } from "../components/ResponsiveStackGrid";
import firebase from "../utils/firebase";
import { Showcase, showcases } from "../utils/showcases";

const { Title, Paragraph } = Typography;

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 32px;
`;

const ShowcaseBody = styled.div`
  padding: 16px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0;
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: #ff577d;
  }
`;

interface IShowcaseCardProps {
  showcase: Showcase;
  onSizeChange?: () => any;
}

const ShowcaseCard = ({ showcase, onSizeChange }: IShowcaseCardProps) => {
  const { href, src, title, description } = showcase;
  const [user, initialising, error] = useAuthState(firebase.auth());
  const [snapshot, loading] = useCollection(
    firebase.firestore().collection(`showcase/${showcase.key}/comment`)
  );
  const comments = useMemo(() => {
    return (
      snapshot && snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );
  }, [snapshot]);
  useEffect(() => {
    if (onSizeChange) onSizeChange();
  }, [comments, onSizeChange]);
  return (
    <Card>
      <a href={href} target="_blank">
        <Image src={src} title={title} />
      </a>
      <ShowcaseBody>
        <a href={href} target="_blank">
          <StyledTitle level={4}>{title}</StyledTitle>
        </a>
        {description && (
          <Paragraph type="secondary" ellipsis={{ rows: 4 }}>
            {description}
          </Paragraph>
        )}
        {loading && (
          <SpinnerContainer>
            <Icon
              type="loading"
              style={{ fontSize: 32, color: "#ff577d" }}
              spin
            />
          </SpinnerContainer>
        )}
        {comments && (
          <CommentList
            comments={comments}
            user={user}
            onDelete={comment => {
              firebase
                .firestore()
                .doc(`showcase/${showcase.key}/comment/${comment.id}`)
                .delete();
            }}
          />
        )}
        <CommendBox
          user={user}
          showcase={showcase}
          onSubmit={e => {
            if (comments) {
              firebase
                .firestore()
                .collection(`showcase/${showcase.key}/comment`)
                .add({
                  createdAt: new Date(),
                  content: e,
                  uid: user.uid
                });
            }
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
      <ResponsiveStackGrid gridRef={stackGridRef}>
        {showcases.map(showcase => (
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
