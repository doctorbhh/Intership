import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 

const Sidebar = ({ onToggle, activeItem }) => {

  const [isMinimized, setIsMinimized] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); 

  const menuItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: '/images/img_frame.svg',
      path: '/dashboard',
    },
    {
      id: 'students',
      name: 'Students',
      icon: '/images/img_frame_purple_400.svg',
      path: '/students',
    },
    
    {
      id: 'organizations',
      name: 'Organizations',
      icon: '/images/img_frame_purple_400_24x24.svg',
      path: '/organizations',
    },
    {
      id: 'instructors',
      name: 'Instructors',
      icon: '/images/img_vector.svg',
      path: '/instructors',
    },
    {
      id: 'courses',
      name: 'Courses',
      icon: '/images/img_frame_24x24.svg',
      path: '/courses',
    },
    {
      id: 'announcements',
      name: 'Announcements',
      icon: '/images/img_frame_1.svg',
      path: '/announcements',
    },
    {
      id: 'transactions',
      name: 'Transactions',
      icon: '/images/img_frame_2.svg',
      path: '/transactions',
    },
    {
      id: 'reporting',
      name: 'Reporting',
      icon: '/images/img_frame_3.svg',
      path: '/reporting',
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: '/images/img_frame_4.svg',
      path: '/settings',
    },
  ];

  const handleMenuClick = (item) => {
    navigate(item.path);
  };

  const handleMenuToggle = () => {
    const newMinimizedState = !isMinimized;
    setIsMinimized(newMinimizedState);
    if (onToggle) onToggle(newMinimizedState);
  };

  return (
    <aside
      className={`bg-secondary-white vh-100 position-fixed start-0 top-0 shadow border-end border-primary ${
        isMinimized ? 'w-16' : 'w-250px'
      } transition-all duration-300`}
      style={{ zIndex: 20 }}
    >
      {/* Logo Section */}
      <div className="p-4 border-bottom border-primary">
        <div className="d-flex align-items-center justify-content-between">
          <h1
            className={`h4 fw-medium text-secondary-gray ${
              isMinimized ? 'visually-hidden' : ''
            }`}
          >
            LMS
          </h1>
          <button
            onClick={handleMenuToggle}
            className="btn p-1 hover-bg-light-pink rounded border-0"
          >
            <img
              src="/images/img_frame_blue_gray_900.svg"
              alt="Menu Toggle"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4 px-3">
        <ul className="list-unstyled">
          {menuItems.map((item) => {
            const isActive =location.pathname.startsWith(item.path) || activeItem?.toLowerCase() === item.id;
            return (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`w-100 d-flex align-items-center px-3 py-2 text-start rounded border-0 transition-colors ${
                    isActive
                      ? 'bg-pink-active text-secondary-gray'
                      : 'bg-transparent text-secondary-gray hover-bg-light-pink'
                  } ${isMinimized ? 'justify-content-center' : ''}`}
                  style={{ minWidth: isMinimized ? '0' : 'auto' }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 me-3"
                  />
                  <span
                    className={`text-sm fw-medium ${
                      isMinimized ? 'visually-hidden' : ''
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
