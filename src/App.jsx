import { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import MainContent from './Components/MainContent/MainContent'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="dashboard-containers">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  )
}

export default App