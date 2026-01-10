import { useState } from 'react'
import './Date.css'

function DateFilter() {
  const [startDate, setStartDate] = useState('2024-10-22')
  const [endDate, setEndDate] = useState('2024-11-21')
  const [showDatePicker, setShowDatePicker] = useState(false)

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    return `${day} ${month}`
  }

  const dateRangeText = startDate && endDate 
    ? `${formatDate(startDate)} - ${formatDate(endDate)}`
    : 'Select Date Range'

  const handleExportCSV = () => {
    console.log('Exporting CSV...', { startDate, endDate })
  }

  return (
    <div className="date-filter-bar">
      <div className="date-range-container">
        <button 
          className="date-range-btn"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <span className="calendar-icon">📅</span>
          <span className="date-range-text">{dateRangeText}</span>
        </button>
        
        {showDatePicker && (
          <div className="date-picker-popup">
            <div className="date-picker-group">
              <label className="date-picker-label">From Date</label>
              <input
                type="date"
                className="date-picker-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="date-picker-group">
              <label className="date-picker-label">To Date</label>
              <input
                type="date"
                className="date-picker-input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <button 
              className="date-picker-close"
              onClick={() => setShowDatePicker(false)}
            >
              Done
            </button>
          </div>
        )}
      </div>
      
      <button className="export-csv-btn" onClick={handleExportCSV}>
        <span className="export-icon">📤</span>
        <span>Export CSV</span>
      </button>
    </div>
  )
}

export default DateFilter

