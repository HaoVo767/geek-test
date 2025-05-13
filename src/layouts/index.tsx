import React, { useState } from "react"
import { UserOutlined, UnorderedListOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Breadcrumb, Button, Drawer, Layout, Menu, theme, Typography } from "antd"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import Header from "./header"
const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("Albums", "albums", <UnorderedListOutlined />),
  getItem("Users", "users", <UserOutlined />),
]

interface MainLayoutProps {
  children?: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({ ...props }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const navigate = useNavigate()
  const location = useLocation()
  const handleMenuClick = (e: { key: string }) => {
    navigate(`/${e.key}`)
    setOpen(false)
  }
  const { id } = useParams()
  const getTilteBreadcrumb = (pathName: string) => {
    return pathName.charAt(0).toUpperCase() + pathName.slice(1)
  }
  const breadcrumbItems = id
    ? [
        {
          title: (
            <div className="flex gap-x-1">
              {window?.location?.pathname?.split("/")[1] === "users" ? <UserOutlined /> : <UnorderedListOutlined />}
              {getTilteBreadcrumb(window?.location?.pathname?.split("/")[1])}
            </div>
          ),
          href: `/${window?.location?.pathname?.split("/")[1]}`,
        },
        { title: <div className="text-black">Show</div>, href: "#" },
      ]
    : undefined
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="pt-6 pl-4 bg-white h-[64px]">
        <div className="hidden lg:block">
          <Header />
        </div>
      </div>
      <Layout>
        <div className="block lg:hidden mt-2">
          <Button
            size="large"
            icon={<UnorderedListOutlined />}
            onClick={showDrawer}
          ></Button>
          <Drawer
            width={250}
            title={
              <a href="/">
                <img
                  alt="logo"
                  width={100}
                  src="https://geekup.vn/Icons/geekup-logo-general.svg"
                  className="hơver:cursor-pointer"
                />
              </a>
            }
            placement={"left"}
            closable={false}
            onClose={onClose}
            open={open}
          >
            <Menu
              theme="light"
              defaultSelectedKeys={[location.pathname.split("/")[1]]}
              mode="inline"
              items={items}
              onClick={handleMenuClick}
            />
          </Drawer>
        </div>
        <Sider
          style={{ paddingTop: 10 }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
          className="hidden lg:block"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            defaultSelectedKeys={[location.pathname.split("/")[1]]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
        </Sider>
        <Content
          style={{ margin: "0", paddingLeft: 20 }}
          className="w-full"
        >
          <div className="mt-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex gap-x-2 mt-2">
            {id && (
              <>
                <Button
                  type="text"
                  icon={<ArrowLeftOutlined />}
                  onClick={() => {
                    navigate(-1)
                  }}
                ></Button>
                <Typography style={{ fontWeight: 600, fontSize: "20px", marginBottom: 10 }}>Show</Typography>
              </>
            )}
            <Typography style={{ fontWeight: 600, fontSize: "20px", marginBottom: 10 }}>
              {getTilteBreadcrumb(window?.location?.pathname?.split("/")[1])}
            </Typography>
          </div>
          <div
            style={{
              padding: 20,
              minHeight: "700px",
              width: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
