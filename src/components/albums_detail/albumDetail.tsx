import { Avatar, Card, Typography, Image } from "antd"
import GenerateAvatar from "../../utils/generate_avatar"

export interface IAlbumDetail {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
const DetailAlbum = ({ ...props }) => {
  const { user, albumData } = props
  const albumTitle = sessionStorage.getItem("albumTitle")
  return (
    <Card
      title={
        <div className="flex gap-4 py-4">
          <Avatar
            style={{ border: "none" }}
            icon={<GenerateAvatar name={user?.name || "unkown"} />}
          />
          <div>
            <Typography>
              <a href={`/users/${user?.id}`}>{user?.name}</a>
            </Typography>
            <Typography className="font-normal mt-2">
              <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </Typography>
          </div>
        </div>
      }
    >
      <Typography style={{ fontWeight: 500, fontSize: "18px" }}>{albumTitle}</Typography>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div className="flex gap-4 flex-wrap mt-4">
          {albumData?.map((item: IAlbumDetail) => (
            <Image
              key={item.id}
              width={200}
              src={item?.thumbnailUrl}
              alt={item?.title}
            />
          ))}
        </div>
      </Image.PreviewGroup>
    </Card>
  )
}

export default DetailAlbum
