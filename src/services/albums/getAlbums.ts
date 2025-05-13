import axios from "axios"
import type { IAlbums, IUser } from "../../types"

export const getAlbums = async () => {
  const reponse = await Promise.all([
    axios.get(`${import.meta.env.VITE_BASE_URL}/users`),
    axios.get(`${import.meta.env.VITE_BASE_URL}/albums`),
  ])
    .then(([usersResponse, albumsResponse]) => {
      return albumsResponse?.data?.map((album: IAlbums) => ({
        ...album,
        key: album.id,
        userName: usersResponse?.data.find((user: IUser) => user.id === album.userId)?.name || "Unknown",
      }))
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
      return { error: "Error fetching Albums" }
    })
  return reponse
}
