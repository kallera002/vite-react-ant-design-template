import { Outlet } from 'react-router-dom'
import axiosConfig from './modules/common/api/axios'

const App = () => {
  axiosConfig()
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
