import { Spin } from "antd"
import UsersTable from "../../components/users/users_list/usersTable"
import { getUsers } from "../../services/users/getUser"
import { useEffect, useState } from "react"
import type { IUser } from "../../types"

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const data = await getUsers()
      if (data?.error) {
        setError(data?.error)
        setUsersData([])
      } else {
        setError(null)
        setUsersData(data)
      }
      setIsLoading(false)
    })()
  }, [])
  if (isLoading)
    return (
      <div
        className="flex justify-center"
        style={{ position: "relative", top: "250px" }}
      >
        <Spin />
      </div>
    )
  if (error) return <div>{error}</div>
  if (usersData.length) return <UsersTable usersData={usersData} />
}

export default UsersPage
