import Header from './Header/Header'
import DateFilter from './Date/Date'
import DashboardTickets from './Dashboard_Tickets/Dashboard_Tickets'
import './MainContent.css'

function MainContent({ sidebarOpen }) {
  return (
    <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Header />
      <DateFilter />
      <DashboardTickets />
    </main>
  )
}

export default MainContent

