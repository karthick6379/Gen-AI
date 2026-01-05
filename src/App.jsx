import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  )
}

export default App
