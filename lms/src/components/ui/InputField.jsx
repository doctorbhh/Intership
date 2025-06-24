import React from 'react';

const InputField = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  icon,
  error,
  label,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
  
  const stateClasses = error 
    ? 'border-red-500 text-red-900 placeholder-red-400 focus:ring-red-500' :'border-gray-300 text-gray-900 placeholder-gray-500';
    
  const disabledClasses = disabled 
    ? 'bg-gray-100 cursor-not-allowed' :'bg-white';

  const inputClasses = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={icon} alt="" className="w-5 h-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`${inputClasses} ${icon ? 'pl-10' : ''}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default InputField;