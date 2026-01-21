import Header from '../Header/Header'
import DateFilter from '../Date/Date'
import DashboardTickets from '../Dashboard_Tickets/Dashboard_Tickets'
import DashboardYears from '../Dashboard_Years/Dashboard_Years'
import Dashboard_Vendors from '../Dashboard_Vendors/Dashboard_Vendors'
import './MainContent.css'

function MainContent({ sidebarOpen }) {
  return (
    <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <DashboardTickets />
      <DashboardYears />
      <Dashboard_Vendors/>
    </main>
  )
}

export default MainContent

