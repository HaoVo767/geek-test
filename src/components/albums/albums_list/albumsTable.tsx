import { Table } from "antd"
import type { IAlbums } from "../../../types"
import { columns } from "./columns"
import queryString from "query-string"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface AlbumTableProps {
  albumsData: (IAlbums & { userName: string })[]
}
const AlbumTable: React.FC<AlbumTableProps> = ({ ...props }) => {
  const { albumsData } = props
  const navigate = useNavigate()
  const query = queryString.parse(window.location.search)
  useEffect(() => {
    if (!query?.current || !query?.pageSize) {
      const stringified = queryString.stringify({ pageSize: 20, current: 1 })
      navigate(`/albums?${stringified}`)
    }
  })
  const onPanigationChange = (page: number, pageSize: number) => {
    const stringified = queryString.stringify({ pageSize, current: page })
    navigate(`/albums?${stringified}`)
  }
  return (
    <Table
      dataSource={albumsData || []}
      columns={columns}
      pagination={{
        onChange: onPanigationChange,
        current: query.current ? Number(query.current) : 1,
        pageSize: query.pageSize ? Number(query.pageSize) : 20,
      }}
    />
  )
}

export default AlbumTable
