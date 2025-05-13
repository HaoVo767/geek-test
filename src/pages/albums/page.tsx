import { Spin } from "antd"
import type { IAlbums } from "../../types"
import { useEffect, useState } from "react"
import { getAlbums } from "../../services/getAlbums"
import AlbumTable from "../../components/albums/albumsTable"

function AlbumsPage() {
  const [albumsData, setAlbumsData] = useState<(IAlbums & { userName: string })[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const data = await getAlbums()
      if (data?.error) {
        setError(data?.error)
        setAlbumsData([])
      } else {
        setError(null)
        setAlbumsData(data)
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
  if (albumsData.length) return <AlbumTable albumsData={albumsData} />
}

export default AlbumsPage
