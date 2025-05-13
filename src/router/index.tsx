import AlbumDetailPage from "../pages/albums/album_detail"
import AlbumsPage from "../pages/albums/albums_page"
import UserDetailPage from "../pages/users/user_detail"
import UsersPage from "../pages/users/users_page"

export const router = [
  {
    path: "/albums",
    component: <AlbumsPage />,
  },
  {
    path: "/albums/:id",
    component: <AlbumDetailPage />,
  },
  {
    path: "/users",
    component: <UsersPage />,
  },
  {
    path: "/users/:id",
    component: <UserDetailPage />,
  },
]
