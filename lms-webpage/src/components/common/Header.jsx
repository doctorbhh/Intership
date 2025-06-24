import React, { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' },
    { value: 'German', label: 'German' },
  ];

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  return (
    <header className="bg-secondary-white shadow-sm py-3 px-4 border-bottom border-primary">
      <div className="d-flex align-items-center justify-content-between">
        {/* Search Section */}
        <div className="flex-grow-1 ms-64" style={{ maxWidth: '400px' }}>
          <div className="input-group">
            <span className="input-group-text bg-accent-light border border-accent-light">
              <img
                src="/images/img_icon_magnifyingglass.svg"
                alt="Search"
                className="w-4 h-4"
              />
            </span>
            <input
              type="text"
              className="form-control text-sm text-secondary-gray border border-accent-light"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          {/* Language Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary border border-primary text-sm text-secondary-gray d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedLanguage}
              <img
                src="/images/img_icon_caretdown.svg"
                alt="Dropdown"
                className="w-4 h-4"
              />
            </button>
            <ul className="dropdown-menu">
              {languageOptions.map((option) => (
                <li key={option.value}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange(option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Notifications */}
          <button
            onClick={handleNotificationClick}
            className="btn p-2 hover-bg-gray-50 rounded"
          >
            <img
              src="/images/img_notifications.svg"
              alt="Notifications"
              className="w-6 h-6"
            />
          </button>

          {/* Profile Section */}
          <div className="d-flex align-items-center gap-2">
            <img
              src="/images/img_frame_5518_4.png"
              alt="Profile"
              className="rounded-circle"
              style={{ width: '44px', height: '44px' }}
            />
            <span className="text-sm fw-medium text-secondary-gray">John</span>
            <button
              onClick={handleProfileClick}
              className="btn p-1 hover-bg-gray-50 rounded"
            >
              <img
                src="/images/img_icon_caretdown.svg"
                alt="Profile Menu"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;