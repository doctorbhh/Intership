import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  className = '',
  icon,
  ...props 
}) => {
  const baseClasses = 'btn font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 d-flex align-items-center justify-content-center';

  const variants = {
    primary: 'btn-primary bg-primary-purple text-primary-white hover:bg-primary-dark focus:ring-primary-purple disabled:bg-gray-400',
    secondary: 'btn-outline-secondary bg-secondary-white text-secondary-gray border border-primary hover:bg-accent-light focus:ring-gray-500 disabled:bg-gray-100',
    outline: 'btn-outline-secondary border border-primary text-secondary-gray hover:bg-accent-light focus:ring-gray-500 disabled:border-gray-200 disabled:text-gray-400',
    ghost: 'btn-link text-secondary-gray hover:bg-accent-light focus:ring-gray-500',
    danger: 'btn-danger bg-status-suspended text-primary-white hover:bg-red-700 focus:ring-red-500 disabled:bg-gray-400'
  };

  const sizes = {
    small: 'btn-sm px-2 py-1',
    medium: 'btn-md px-3 py-2',
    large: 'btn-lg px-4 py-3'
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'disabled cursor-not-allowed' : ''} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {icon && <img src={icon} alt="" className="w-4 h-4 me-2" />}
      {children}
    </button>
  );
};

export default Button;