import { Typography } from "antd";
import React from "react";
import styled from "styled-components";
import profileImage from "../public/images/profile.jpg";

const { Title } = Typography;

const ProfileContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 0 24px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    font-size: 1em;
  }
`;

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage src={profileImage} alt="profile" />
      <ProfileContent>
        <StyledTitle>Witchayut Jongpattanasombut (Pepe)</StyledTitle>
      </ProfileContent>
    </ProfileContainer>
  );
};
