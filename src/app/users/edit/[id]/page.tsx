/* eslint-disable @next/next/no-img-element */
"use client";

import { Edit, useForm } from "@refinedev/antd";
import { useOne } from "@refinedev/core";
import { Form, Input, InputNumber, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import axios from "axios";
import { dataProvider } from "@providers/data-provider";
import { RcFile } from "antd/es/upload";

export default function UsersEdit() {
  const params = useParams<{ id: string }>();
  const { formProps, saveButtonProps } = useForm({});
  const { data, isLoading } = useOne({ resource: "users", id: params.id });
  const baseApiUrl = dataProvider.getApiUrl();

  // Function to handle file upload
  const handleUploadCsv = async ({ file }: { file: RcFile }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_email", data?.data.email);

    try {
      const response = await axios.post(`${baseApiUrl}/csvs/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully", response.data);
      return true;
    } catch (error) {
      console.error("Error uploading file", error);
      return false;
    }
  };

  const handleUploadProfileImage = async ({ file }: { file: RcFile }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_email", data?.data.email);

    try {
      const response = await axios.post(
        `${baseApiUrl}/users/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully", response.data);
      return true;
    } catch (error) {
      console.error("Error uploading file", error);
      return false;
    }
  };

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

        {/* <Form.Item
          label="Profile Picture URL"
          name="urlProfilePicture"
          initialValue={data?.data.urlProfilePicture}
        >
          <Input />
        </Form.Item> */}
      </Form>

      <Form.Item label="Foto de Perfil">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {data?.data.urlProfilePicture ? (
            <img
              src={baseApiUrl + data?.data.urlProfilePicture}
              alt={data?.data.name}
              style={{ maxWidth: "500px" }}
            />
          ) : (
            "Nenhum Foto de Perfil existente para esse usuario"
          )}
          <Upload
            beforeUpload={async (file) =>
              await handleUploadProfileImage({ file: file })
            } // Prevent automatic upload
            // customRequest={} // Custom request to handle file upload
          >
            <Button icon={<UploadOutlined />}>
              {data?.data.performances[0]?.originalFilename
                ? "Clique para substituir a Foto de Perfil"
                : "Cique para fazer o upload da Foto de Perfil"}
            </Button>
          </Upload>
        </div>
      </Form.Item>

      {/* Separate upload button for CSV file */}
      <Form.Item label="Arquivo CSV">
        <h3>
          {data?.data.performances[0]?.originalFilename ??
            "Nenhum CSV existente para esse usuario"}
        </h3>
        <Upload
          beforeUpload={async (file) => await handleUploadCsv({ file: file })} // Prevent automatic upload
          // customRequest={} // Custom request to handle file upload
        >
          <Button icon={<UploadOutlined />}>
            {data?.data.performances[0]?.originalFilename
              ? "Clique para substituir o CSV"
              : "Cique para fazer o upload do CSV"}
          </Button>
        </Upload>
      </Form.Item>
    </Edit>
  );
}
