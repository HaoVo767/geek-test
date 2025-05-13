import axios from "axios"
import type { IUserAlbum } from "../../components/users/user_detail/colums"

export const getUserAlbums = async (userId: number) => {
  const reponse = await Promise.all([
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}/albums`),
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}`),
  ])
    .then(([userAlbums, usersResponse]) => {
      return {
        user: usersResponse.data,
        albums: userAlbums?.data?.map((album: IUserAlbum) => {
          return {
            ...album,
            key: album.id,
          }
        }),
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
      return { error: "Error fetching user albums" }
    })
  return reponse
}
