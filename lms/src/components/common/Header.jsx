import React, { useState } from 'react';
import InputField from '../ui/InputField';
import Dropdown from '../ui/Dropdown';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' },
    { value: 'German', label: 'German' }
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
    <header className="bg-white shadow-sm h-20 flex items-center justify-between px-4 border-b border-gray-200">
      {/* Search Section */}
      <div className="flex items-center flex-1 max-w-md ml-64">
        <div className="relative w-full">
          <InputField
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <img
            src="/images/img_icon_magnifyingglass.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 min-w-28">
          <Dropdown
            options={languageOptions}
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="text-sm text-gray-700 font-medium"
          />
          <img
            src="/images/img_icon_caretdown.svg"
            alt="Dropdown"
            className="ml-2 w-5 h-5"
          />
        </div>

        {/* Notifications */}
        <button
          onClick={handleNotificationClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <img
            src="/images/img_notifications.svg"
            alt="Notifications"
            className="w-11 h-11"
          />
        </button>

        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/img_frame_5518.png"
            alt="Profile"
            className="w-11 h-11 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">John</span>
          <button
            onClick={handleProfileClick}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <img
              src="/images/img_icon_caretdown.svg"
              alt="Profile Menu"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;