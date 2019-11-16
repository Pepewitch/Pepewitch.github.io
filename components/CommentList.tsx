import { Avatar, Comment } from "antd";
import moment from "moment";
import React from "react";
import styled from "styled-components";

const StyledComment = styled(Comment)`
  .ant-comment-inner {
    padding-bottom: 0px;
  }
  .ant-comment-avatar {
    cursor: initial;
  }
`;

export const CommentList = ({ comments, user }: any) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <StyledComment
          // actions={actions}
          key={index}
          author={
            user && user.uid === comment.uid ? user.displayName : "Someone"
          }
          avatar={
            <Avatar
              size="small"
              icon={!user || comment.uid !== user.uid ? "user" : undefined}
              src={user && comment.uid === user.uid ? user.photoURL : undefined}
            />
          }
          content={<p>{comment.content}</p>}
          datetime={<span>{moment(comment.createdAt.toDate()).fromNow()}</span>}
        />
      ))}
    </div>
  );
};
