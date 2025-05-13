import { EyeOutlined } from "@ant-design/icons"
import { Avatar, Button, Space, type TableProps } from "antd"
import GenerateAvatar from "../generate_avatar"
import type { IAlbums } from "../../types"

export const columns: TableProps<IAlbums & { userName: string }>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "User",
    dataIndex: "userName",
    key: "userName",
    render: (_, record) => (
      <Space
        size="middle"
        className="hover:cursor-pointer"
      >
        <Avatar
          style={{ border: "none" }}
          icon={<GenerateAvatar name={record?.userName} />}
        />
        <a href={`/users/${record.userId}`}>{record.userName}</a>
      </Space>
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={() => {
            window.location.href = `/albums/${record.id}`
            sessionStorage.setItem("userId", record.userId.toString())
            sessionStorage.setItem("albumTitle", record.title.toString())
          }}
          icon={<EyeOutlined />}
        >
          Show
        </Button>
      </Space>
    ),
  },
]
