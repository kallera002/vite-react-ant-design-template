import { lazy } from 'react'
import axiosConfig from './modules/common/api/axios'
import './App.css'

import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

const NavbarComponent = lazy(() => import('./layouts/navbar'))

const App = () => {
  axiosConfig()
  return (
    <>
      <NavbarComponent />
      <Content>
        <Outlet />
      </Content>
    </>
  )
}

export default App
