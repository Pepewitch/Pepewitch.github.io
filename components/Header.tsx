import { Avatar, Button, Icon, Popconfirm, Popover, Typography } from "antd";
import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import FbIcon from "../public/fb.svg";
import GgIcon from "../public/gg.svg";
import firebase from "../utils/firebase";

const { Title } = Typography;

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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  justify-content: space-between;
  .container-item {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const SignInLogoButton = styled(Button)`
  overflow: hidden;
  margin: 4px 0;
  display: flex;
  align-items: center;
`;

const SignInPopContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  border-radius: 4px;
  overflow: hidden;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    margin-right: 8px;
    margin-bottom: 0;
    color: #ff577d;
  }
`;

const getFacebookProvider = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("email");
  return provider;
};

const getGoogleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  return provider;
};

const SignInButton = () => {
  return (
    <Popover
      placement="bottomRight"
      title="Sign in method"
      trigger="click"
      content={
        <SignInPopContent>
          <SignInLogoButton
            onClick={() =>
              firebase.auth().signInWithPopup(getFacebookProvider())
            }
          >
            <IconContainer>
              <FbIcon />
            </IconContainer>
            Sign in with Facebook
          </SignInLogoButton>
          <SignInLogoButton
            onClick={() => firebase.auth().signInWithPopup(getGoogleProvider())}
          >
            <IconContainer>
              <GgIcon />
            </IconContainer>
            Sign in with Google
          </SignInLogoButton>
        </SignInPopContent>
      }
    >
      <Button type="link">Sign in</Button>
    </Popover>
  );
};

export const Header = () => {
  const [user, initialising, error] = useAuthState(firebase.auth());
  return (
    <Container>
      <div className="container-item">
        <a href="mailto:skpepe134@gmail.com">
          <StyledTitle level={4}>Pepewitch</StyledTitle>
        </a>
        <SocialLink href="https://facebook.com/pepewitch" target="_blank">
          <Icon type="facebook" theme="filled" />
        </SocialLink>
        <SocialLink
          href="https://medium.com/@witchayutpepejongpattanasombut"
          target="_blank"
        >
          <Icon type="medium-square" theme="filled" />
        </SocialLink>
        <SocialLink href="https://github.com/Pepewitch" target="_blank">
          <Icon type="github" theme="filled" />
        </SocialLink>
      </div>
      <div className="container-item">
        {user ? (
          <Popconfirm
            placement="bottomRight"
            title="Sign out?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => firebase.auth().signOut()}
          >
            <Button
              style={{ width: 40, height: 40 }}
              type="link"
              shape="circle"
            >
              <Avatar size="large" src={user.photoURL} />
            </Button>
          </Popconfirm>
        ) : (
          <Fragment>
            <SignInButton />
            <Avatar size="large" icon="user" />
          </Fragment>
        )}
      </div>
    </Container>
  );
};
