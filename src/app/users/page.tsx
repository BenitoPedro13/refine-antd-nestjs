"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useList, type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export default function UsersList() {
  const { data, isLoading } = useList({ resource: "users" });
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="password" title="Password" />
        <Table.Column
          dataIndex="totalInitialInvestment"
          title="Total Initial Investment"
        />
        <Table.Column
          dataIndex="estimatedExecutedInvestment"
          title="Estimated Executed Investment"
        />
        <Table.Column dataIndex="campaignName" title="Campaign Name" />
        <Table.Column dataIndex="color" title="Color" />
        <Table.Column
          dataIndex="urlProfilePicture"
          title="Profile Picture URL"
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
