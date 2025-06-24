import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  error,
  label,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  const baseClasses = 'position-relative w-100';
  const buttonClasses = `btn w-100 px-3 py-2 text-start bg-secondary-white border rounded border-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
    error ? 'border-danger' : ''
  } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover-border-gray-400'}`;

  return (
    <div className={`${baseClasses} ${className}`} ref={dropdownRef}>
      {label && (
        <label className="form-label text-sm text-secondary-gray mb-2">
          {label}
        </label>
      )}
      <div className="dropdown">
        <button
          type="button"
          className={buttonClasses}
          onClick={handleToggle}
          disabled={disabled}
          data-bs-toggle="dropdown"
          aria-expanded={isOpen}
          {...props}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className={selectedOption ? 'text-secondary-gray' : 'text-muted'}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        {isOpen && (
          <ul className="dropdown-menu w-100 mt-1 bg-secondary-white border border-primary shadow">
            {options.length === 0 ? (
              <li className="dropdown-item text-muted p-2">No options available</li>
            ) : (
              options.map((option, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item text-secondary-gray hover-bg-accent-light w-100 text-start"
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
      {error && <p className="text-danger mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default Dropdown;