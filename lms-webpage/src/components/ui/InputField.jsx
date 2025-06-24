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
  const baseClasses = 'form-control w-100 px-3 py-2 border rounded text-sm transition-colors focus-outline-none focus-ring-2 focus-ring-purple-500';

  const stateClasses = error 
    ? 'border-danger text-danger placeholder-danger focus-ring-danger' 
    : 'border-primary text-secondary-gray placeholder-muted';

  const disabledClasses = disabled 
    ? 'bg-gray-100 cursor-not-allowed' 
    : 'bg-secondary-white';

  const inputClasses = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();

  return (
    <div className="w-100">
      {label && (
        <label className="form-label text-sm text-secondary-gray mb-2">
          {label}
          {required && <span className="text-danger ms-1">*</span>}
        </label>
      )}
      <div className="position-relative">
        {icon && (
          <div className="position-absolute top-50 start-0 translate-middle-y ps-3 d-flex align-items-center pointer-events-none">
            <img src={icon} alt="" className="w-4 h-4 text-muted" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`${inputClasses} ${icon ? 'ps-10' : ''}`}
          {...props}
        />
      </div>
      {error && <p className="text-danger mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;