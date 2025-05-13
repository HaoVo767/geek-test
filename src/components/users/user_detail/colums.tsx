import { Button, Space, type TableProps } from "antd"
import { EyeOutlined } from "@ant-design/icons"

export interface IUserAlbum {
  userId: number
  id: number
  title: string
  key: number
}
export const columns: TableProps<IUserAlbum>["columns"] = [
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
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button
          onClick={() => {
            window.location.href = `/albums/${record.id}`
            window.sessionStorage.setItem("albumTitle", record.title)
          }}
          icon={<EyeOutlined />}
        >
          Show
        </Button>
      </Space>
    ),
  },
]
