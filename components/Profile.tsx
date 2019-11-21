import { Button, Icon, Modal, Timeline, Typography } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import profileImage from "../public/images/profile.jpg";
import { COLOR } from "../utils/const";

const { Title, Text } = Typography;

const ProfileContainer = styled.div`
  width: 100%;
  padding: 0 24px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    margin: auto;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 16px;
  margin-left: auto;
  @media screen and (max-width: 500px) {
    margin-top: 16px;
    margin-right: 0;
    margin-left: 0;
    align-items: center;
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    font-size: 1em;
    color: ${COLOR.PRIMARY};
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 4px;
  border-radius: 4px;
  overflow: hidden;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin-top: 16px;
  }
`;

const profiles = [
  {
    title: "Bachelor of Computer Engineering, Chulalongkorn University"
  },
  {
    title: "Former intern fullstack developer at Cleverse"
  }
];

export const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <ProfileContainer>
      <SocialLinkContainer>
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
      </SocialLinkContainer>
      <ProfileContent>
        <a href="mailto:skpepe134@gmail.com">
          <StyledTitle>Witchayut Jongpattanasombut (Pepe)</StyledTitle>
        </a>
        <Text type="secondary">Fullstack Developer</Text>
      </ProfileContent>
      <ProfileImage
        src={profileImage}
        alt="profile"
        onClick={() => setOpen(true)}
      />
      <Modal
        title="Profile"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="submit" type="primary" onClick={() => setOpen(false)}>
            Close
          </Button>
        ]}
      >
        <Timeline>
          {profiles.map(profile => (
            <Timeline.Item key={profile.title}>{profile.title}</Timeline.Item>
          ))}
        </Timeline>
      </Modal>
    </ProfileContainer>
  );
};
