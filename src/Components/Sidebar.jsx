import { useState } from 'react';
import Logo from '../assets/Logo.png';
import LogoSmall from '../assets/logosmall.png';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 1, icon: '🏠', label: 'Dashboard' },
    { id: 2, icon: '💳', label: 'Payments' },
    { id: 3, icon: '🔄', label: 'Transactions' },
    { id: 4, icon: '📄', label: 'Invoices' },
    { id: 5, icon: '💳', label: 'Cards' },
    { id: 6, icon: '🐷', label: 'Saving Plans' },
  ];

  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img 
            src={isOpen ? Logo : LogoSmall} 
            alt="Logo" 
            className="logo-icon" 
          />
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '◀' : '▶'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {isOpen && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        {isOpen && (
          <div className="user-profile">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-email">john@example.com</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

