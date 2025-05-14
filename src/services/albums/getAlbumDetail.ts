import type { IAlbumDetail } from "./../../components/albums/albums_detail/albumDetail"
import axios from "axios"

export const getAlbumDetail = async ({ userId, albumId }: { userId: string; albumId: string }) => {
  const response = await Promise.all([
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}`),
    axios.get(`${import.meta.env.VITE_BASE_URL}/albums/${albumId}/photos`),
  ])
    .then(([userResponse, albumResponse]) => {
      return {
        user: userResponse.data,
        albumData: albumResponse.data,
      }
    })
    .then((data) => {
      return {
        user: data.user,
        albumData: data.albumData.map((item: IAlbumDetail) => {
          return {
            ...item,
            url: item.url.replace("https://via.placeholder.com", "https://dummyjson.com/image"),
            thumbnailUrl: item.thumbnailUrl.replace("https://via.placeholder.com", "https://dummyjson.com/image"),
          }
        }),
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
      return { error: "Error fetching data" }
    })
  return response
}
