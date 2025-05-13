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
    .catch((error) => {
      console.error("Error fetching data:", error)
      return { error: "Error fetching data" }
    })
  return response
}
