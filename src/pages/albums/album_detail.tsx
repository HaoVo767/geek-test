import { Spin } from "antd"
import { useEffect, useState } from "react"
import { getAlbumDetail } from "../../services/albums/getAlbumDetail"
import { useParams } from "react-router-dom"
import type { IUser } from "../../types"
import type { IAlbumDetail } from "../../components/albums/albums_detail/albumDetail"
import DetailAlbum from "../../components/albums/albums_detail/albumDetail"

const AlbumDetailPage = () => {
  const userId = sessionStorage.getItem("userId")
  const { id: albumId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [albumData, setAlbumData] = useState<{ user: IUser; albumData: IAlbumDetail[] }>()
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await getAlbumDetail({ userId: userId || "", albumId: albumId || "" })
      if ("error" in response) {
        setIsLoading(false)
        setError(response.error)
      } else {
        setAlbumData(response)
      }
      setIsLoading(false)
    })()
  }, [userId, albumId])

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
  if (albumData?.user && albumData.albumData)
    return (
      <DetailAlbum
        user={albumData?.user}
        albumData={albumData?.albumData}
      />
    )
}

export default AlbumDetailPage
