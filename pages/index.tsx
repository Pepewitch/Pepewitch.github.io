import { Icon, Typography } from "antd";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
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
