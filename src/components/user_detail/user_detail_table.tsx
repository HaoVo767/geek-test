import type { IUser } from "../../types"
import { Avatar, Card, Table, Typography } from "antd"
import GenerateAvatar from "../../utils/generate_avatar"
import { columns, type IUserAlbum } from "./colums"

interface UserDetailTableProps {
  userAlbums: IUserAlbum[]
  user: IUser
}
const UserDetailTable: React.FC<UserDetailTableProps> = ({ ...props }) => {
  const { userAlbums, user } = props

  return (
    <Card
      title={
        <div className="flex gap-4 py-4">
          <Avatar
            style={{ border: "none" }}
            icon={<GenerateAvatar name={user?.name || "unkown"} />}
          />
          <div>
            <Typography>{user?.name}</Typography>
            <Typography className="font-normal mt-2">
              <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </Typography>
          </div>
        </div>
      }
    >
      <div>
        <Typography
          className="font-semibold"
          style={{ fontSize: "20px" }}
        >
          Albums
        </Typography>
        <div className="mt-2">
          <Table
            dataSource={userAlbums || []}
            columns={columns}
            pagination={false}
          />
        </div>
      </div>
    </Card>
  )
}

export default UserDetailTable
