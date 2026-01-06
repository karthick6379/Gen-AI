import { useState } from 'react'
import './Header.css'

function Header() {
  const [selectedCountry, setSelectedCountry] = useState('Select Country')

  return (
    <header className="main-header">
      <div className="header-content">
        <h1 className="page-title">Dashboard</h1>
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

