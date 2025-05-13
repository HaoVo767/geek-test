import axios from "axios"
import type { IUser } from "../../types"

export const getUsers = async () => {
  const reponse = axios
    .get(`${import.meta.env.VITE_BASE_URL}/users`)
    .then((response) => {
      return response?.data?.map((item: IUser) => {
        return {
          ...item,
          key: item.id,
        }
      })
    })
    .then((data) => {
      if (data) {
        return data
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error)
      return { error: "Error fetching users" }
    })
  return reponse
}
