import axios from "axios"
import type { IUserAlbum } from "../components/user_detail/colums"

export const getUserAlbums = async (userId: number) => {
  const reponse = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`),
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
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
