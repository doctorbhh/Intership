import React, { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Students');

  const menuItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: '/images/img_frame.svg',
      path: '/dashboard'
    },
    {
      id: 'students',
      name: 'Students',
      icon: '/images/img_frame_purple_400.svg',
      path: '/students'
    },
    {
      id: 'organizations',
      name: 'Organizations',
      icon: '/images/img_frame_purple_400_24x24.svg',
      path: '/organizations'
    },
    {
      id: 'instructors',
      name: 'Instructors',
      icon: '/images/img_vector.svg',
      path: '/instructors'
    },
    {
      id: 'courses',
      name: 'Courses',
      icon: '/images/img_frame_24x24.svg',
      path: '/courses'
    },
    {
      id: 'announcements',
      name: 'Announcements',
      icon: '/images/img_frame_1.svg',
      path: '/announcements'
    },
    {
      id: 'transactions',
      name: 'Transactions',
      icon: '/images/img_frame_2.svg',
      path: '/transactions'
    },
    {
      id: 'reporting',
      name: 'Reporting',
      icon: '/images/img_frame_3.svg',
      path: '/reporting'
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: '/images/img_frame_4.svg',
      path: '/settings'
    }
  ];

  const handleMenuClick = (itemName) => {
    setActiveItem(itemName);
    console.log(`Navigating to ${itemName}`);
  };

  const handleMenuToggle = () => {
    console.log('Menu toggle clicked');
  };

  return (
    <aside className="bg-white w-64 h-screen fixed left-0 top-0 shadow-lg border-r border-gray-200">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium text-gray-800">LMS</h1>
          <button
            onClick={handleMenuToggle}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
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
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuClick(item.name)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeItem === item.name
                    ? 'bg-purple-50 text-gray-800' :'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 mr-4"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;