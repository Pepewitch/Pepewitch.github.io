import { Avatar, Button, Form, Input } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";
import React, { useCallback } from "react";
import styled from "styled-components";
import { Showcase } from "../configs/showcases";

const CommendInput = styled(Input)`
  .ant-input {
    border-radius: 9999px;
  }
  .ant-input-prefix {
    left: 4px;
  }
`;

interface ICommendBoxProps {
  showcase: Showcase;
  onSubmit: (value: any) => any;
  user: any;
  form: WrappedFormUtils;
}

export const CommendBox = Form.create<ICommendBoxProps>({
  name: "commend"
})(({ user, onSubmit, form }: ICommendBoxProps) => {
  const { getFieldDecorator } = form;
  const formOnSubmit = useCallback(
    e => {
      e.preventDefault();
      const value = form.getFieldValue("commend");
      if (value) {
        onSubmit(value);
      }
      form.resetFields();
    },
    [form, onSubmit]
  );
  return (
    <Form onSubmit={formOnSubmit}>
      <Form.Item>
        {getFieldDecorator("commend")(
          <CommendInput
            placeholder={user ? "Commend" : "Login to commend"}
            disabled={!user}
            autoComplete="off"
            name="commend"
            prefix={
              <Avatar
                size={24}
                {...{
                  src: user ? user.profile : undefined,
                  icon: !user ? "user" : undefined
                }}
              />
            }
          />
        )}
      </Form.Item>
    </Form>
  );
});
