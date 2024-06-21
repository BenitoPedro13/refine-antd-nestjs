"use client";

import { Edit, useForm } from "@refinedev/antd";
import { useOne } from "@refinedev/core";
import { Form, Input, InputNumber } from "antd";
import { useParams } from "next/navigation";

export default function UsersEdit() {
  const params = useParams<{ id: string }>();
  const { formProps, saveButtonProps } = useForm({});
  const { data, isLoading } = useOne({ resource: "users", id: params.id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          initialValue={data?.data.email}
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          initialValue={data?.data.name}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          initialValue={data?.data.password}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Total Initial Investment"
          name="totalInitialInvestment"
          initialValue={data?.data.totalInitialInvestment}
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Estimated Executed Investment"
          name="estimatedExecutedInvestment"
          initialValue={data?.data.estimatedExecutedInvestment}
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Campaign Name"
          name="campaignName"
          initialValue={data?.data.campaignName}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Color" name="color" initialValue={data?.data.color}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Profile Picture URL"
          name="urlProfilePicture"
          initialValue={data?.data.urlProfilePicture}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
}
