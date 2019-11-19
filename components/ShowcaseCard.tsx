import { Icon, Tag, Typography } from "antd";
import React, { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import firebase from "../utils/firebase";
import { Showcase } from "../utils/showcases";
import { Card } from "./Card";
import { CommendBox } from "./CommendBox";
import { CommentList } from "./CommentList";
import { Image } from "./Image";

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(1.05);
  }
`;
const CardImageLink = styled.a`
  position: relative;
  overflow: hidden;
  .source {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    font-size: 24px;
    /* background-color: white; */
  }
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

const TagsContainer = styled.div`
  margin-bottom: 8px;
`;

const StyledTag = styled(Tag)`
  border-radius: 9999px;
`;

interface IShowcaseCardProps {
  showcase: Showcase;
  onSizeChange?: () => any;
}

export const ShowcaseCard = ({
  showcase,
  onSizeChange
}: IShowcaseCardProps) => {
  const { href, src, title, description, tags } = showcase;
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
    <StyledCard>
      <CardImageLink href={href} target="_blank">
        <Image src={src} title={title} />
      </CardImageLink>
      <ShowcaseBody>
        <a href={href} target="_blank">
          <StyledTitle level={4}>{title}</StyledTitle>
        </a>
        {description && (
          <Paragraph type="secondary" ellipsis={{ rows: 4 }}>
            {description}
          </Paragraph>
        )}
        {tags && (
          <TagsContainer>
            {tags.map(tag => (
              <StyledTag key={tag.text} color={tag.color}>
                {tag.text}
              </StyledTag>
            ))}
          </TagsContainer>
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
    </StyledCard>
  );
};
