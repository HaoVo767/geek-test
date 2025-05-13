import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function DynamicTitle() {
  const location = useLocation()
  const url = location.pathname.split("/")
  useEffect(() => {
    if (location.pathname.includes("users")) {
      window.document.title = url?.[2] ? `#${url?.[2]} Show User | Refind` : `Users | Refind`
    } else if (location.pathname.includes("albums")) {
      window.document.title = url?.[2] ? `#${url?.[2]} Show Albums | Refind` : "Albums | Refind"
    } else {
      document.title = "Website Của Bạn"
    }
  }, [location.pathname, url])

  return null
}

export default DynamicTitle
