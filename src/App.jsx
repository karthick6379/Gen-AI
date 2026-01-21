// import { useState } from 'react'
// import Sidebar from './Components/Sidebar/Sidebar'
// import MainContent from './Components/MainContent/MainContent'
// import './App.css'

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen)
//   }

//   return (
//     <div className="dashboard-containers">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       <Routes>
//       <Route path="/" element={<MainContent sidebarOpen={sidebarOpen}/>} />
//       <Route path="/invoices" element={<Invoice />} />
//       </Routes>

//     </div>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import MainContent from './Components/MainContent/MainContent';
import Invoice from './Components/Invoices/Invoices'
import Header from './Components/Header/Header'
import DateFilter from './Components/Date/Date';
import './App.css';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="dashboard-containers">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Header />
        <DateFilter />
        {/* Define your routes here */}
        <Routes>
        <Route path="/" element={<MainContent />} />
          <Route path="/Invoice_Details" element={<Invoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
