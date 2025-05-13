import AlbumDetailPage from "../pages/album_detail/page"
import AlbumsPage from "../pages/albums/page"
import UserDetailPage from "../pages/user_detail/page"
import UsersPage from "../pages/users/page"

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
