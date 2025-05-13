import { Table } from "antd"
import { columns } from "./columns"
import type React from "react"
import type { IUser } from "../../types"

interface UsersTableProps {
  usersData: IUser[]
}
const UsersTable: React.FC<UsersTableProps> = ({ ...props }) => {
  const { usersData } = props
  return (
    <Table
      dataSource={usersData || []}
      columns={columns}
      pagination={false}
    />
  )
}

export default UsersTable
