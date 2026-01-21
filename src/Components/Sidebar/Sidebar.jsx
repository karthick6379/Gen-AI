import { useState } from 'react';
import Logo from '../../assets/Logo.png'
import LogoSmall from '../../assets/logosmall.png';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 1, icon: '🏠', label: 'Dashboard',path:'/' },
    { id: 2, icon: '📄', label: 'Invoice Details' ,path:'/invoice_Details'},
  ];

  const [activeItem, setActiveItem] = useState(1);
  const navigate = useNavigate();

  return (
    // changed
    <div className={`sidebar ${isOpen ? 'closed' : 'open'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img 
            src={isOpen ? LogoSmall : Logo} 
            alt="Logo" 
            className="logo-icon" 
          />
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {/* changed */}
          {isOpen ? '▶' : '◀'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveItem(item.id);
                  navigate(item.path); // 👈 navigate to the route
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                {/* changed */}
                {!isOpen && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      
    </div>
  );
};

export default Sidebar;