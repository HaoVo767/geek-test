import axios from "axios"

export const getAlbumDetail = async ({ userId, albumId }: { userId: string; albumId: string }) => {
  const response = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`),
  ])
    .then(([userResponse, albumResponse]) => {
      return {
        user: userResponse.data,
        albumData: albumResponse.data,
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
      return { error: "Error fetching data" }
    })
  return response
}
