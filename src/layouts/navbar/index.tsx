import { useEffect, useState } from 'react'
import { Layout, Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

const NavbarComponent = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(!visible)
  }

  const { pathname: location } = useLocation()
  useEffect(() => {
    setVisible(false)
  }, [location])

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <h3 className="brand-font">Brand Here</h3>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu mode={'horizontal'} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={'horizontal'} />
            </div>

            <Drawer
              title={'Brand Here'}
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}>
              <LeftMenu mode={'inline'} />
              <RightMenu mode={'inline'} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  )
}

export default NavbarComponent
