import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserAlbums } from "../../services/users/getUserAlbums"
import UserDetailTable from "../../components/users/user_detail/user_detail_table"
import { Spin } from "antd"
import type { IUserAlbum } from "../../components/users/user_detail/colums"
import type { IUser } from "../../types"

function UserDetailPage() {
  const { id } = useParams()
  const [userAlbums, setUserAlbums] = useState<{ albums: IUserAlbum[]; user: IUser } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const data = await getUserAlbums(Number(id))
      if ("error" in data) {
        setError(data.error)
      } else {
        setError(null)
        setUserAlbums(data)
      }
      setIsLoading(false)
    })()
  }, [id])
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
  if (userAlbums?.albums && userAlbums.user)
    return (
      <UserDetailTable
        userAlbums={userAlbums.albums}
        user={userAlbums.user}
      />
    )
}

export default UserDetailPage
