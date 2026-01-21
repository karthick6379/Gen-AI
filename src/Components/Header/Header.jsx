import { useState } from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

function Header() {
  const [selectedCountry, setSelectedCountry] = useState('Select Country')
  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/':
        return 'Dashboard'; 
      case '/invoice_Details':
        return 'Invoice Details'; 
      default:
        return 'Page'; 
       } 
     };

  return (
    <header className="main-header">
      <div className="header-content">
        <h1 className="page-title">{getPageTitle(location.pathname)}</h1>
        <div className="header-actions">
          <select 
            className="country-select" 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          > 
            <option value="Select Country" disabled>Select Country</option>
            <option value="Germany">Germany</option>
            <option value="Belgium">Belgium</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
          </select>
          <button className="header-btn">🔍</button>
        </div>
      </div>
    </header>
  )
}

export default Header

