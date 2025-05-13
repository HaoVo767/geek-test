import { Avatar, Button, Space, Typography, type TableColumnsType } from "antd"
import type { IUser } from "../../types"
import { EyeOutlined } from "@ant-design/icons"
import GenerateAvatar from "../../utils/generate_avatar"

export const columns: TableColumnsType<IUser> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (_, record) => (
      <Space size="middle">
        <Avatar
          style={{ border: "none" }}
          icon={<GenerateAvatar name={record?.name} />}
        />
      </Space>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => <Typography>{record.name}</Typography>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <a href={`mailto:${text}`}>{text}</a>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    render: (text) => <a href={`tel:${text}`}>{text}</a>,
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    render: (text) => <a href={`https://${text}`}>{text}</a>,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={() => {
            window.location.href = `/users/${record.id}`
            sessionStorage.setItem("userId", record.id.toString())
          }}
          icon={<EyeOutlined />}
        >
          Show
        </Button>
      </Space>
    ),
  },
]
