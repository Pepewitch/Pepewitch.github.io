import { Avatar, Button, Comment, Modal } from "antd";
import "antd/es/modal/style/confirm.less";
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
  .delete-button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
  }
  .ant-comment-content:hover {
    .delete-button {
      display: block;
    }
  }
`;

const StyledAvatar = styled(Avatar)`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

const DeleteButton = props => {
  return (
    <Button
      className="delete-button"
      shape="circle"
      size="small"
      icon="close"
      type="link"
      {...props}
    />
  );
};

export const CommentList = ({ comments, user, onDelete }: any) => {
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
            <StyledAvatar
              size="small"
              icon={!user || comment.uid !== user.uid ? "user" : undefined}
              src={user && comment.uid === user.uid ? user.photoURL : undefined}
            />
          }
          content={
            <p>
              {comment.content}
              {user && user.uid === comment.uid && (
                <DeleteButton
                  onClick={() => {
                    Modal.confirm({
                      title: "Delete this comment?",
                      onOk: () => onDelete(comment)
                    });
                  }}
                />
              )}
            </p>
          }
          datetime={<span>{moment(comment.createdAt.toDate()).fromNow()}</span>}
        />
      ))}
    </div>
  );
};
