import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { MenuMode } from './types'

const LeftMenu: React.FC<MenuMode> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="features">Features</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
      <Menu.Item key="explore">
        <Link to={'signin'}>Sign In</Link>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu
