"use client";
import { Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function UserShow() {
  const { data, isLoading } = useOne({ resource: "users", id: 1 });
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />

      <Title level={5}>Email</Title>
      <TextField value={record?.email} />

      <Title level={5}>Password</Title>
      <TextField value={record?.password} />

      <Title level={5}>Name</Title>
      <TextField value={record?.name} />

      <Title level={5}>Created At</Title>
      <TextField value={new Date(record?.createdAt).toLocaleString()} />

      <Title level={5}>Updated At</Title>
      <TextField value={new Date(record?.updatedAt).toLocaleString()} />

      <Title level={5}>Total Initial Investment</Title>
      <TextField value={record?.totalInitialInvestment} />

      <Title level={5}>Color</Title>
      <TextField value={record?.color} />

      <Title level={5}>Campaign Name</Title>
      <TextField value={record?.campaignName} />

      <Title level={5}>Estimated Executed Investment</Title>
      <TextField value={record?.estimatedExecutedInvestment} />

      <Title level={5}>Profile Picture URL</Title>
      <TextField value={record?.urlProfilePicture || "N/A"} />
    </Show>
  );
}
