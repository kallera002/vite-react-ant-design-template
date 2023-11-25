import axiosConfig from './modules/common/api/axios'
import './App.css'
import { Layout } from 'antd'
import { Header, Content, Footer } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

const App = () => {
  axiosConfig()
  return (
    <Layout className="mainLayout">
      <Header>
        <h1>Header</h1>
      </Header>
      <Content>
       <Outlet />
      </Content>
      <Footer>
        <h1>Footer</h1>
      </Footer>     
    </Layout>
  )
}

export default App
