import React from 'react';

const Button = ({ children, onClick, primary, className, type, disabled }) => {
  return (
    <button
      disabled={disabled ? true : false}
      type={type}
      className={`
      ${className}
      py-1 px-4 rounded
      ${
        primary
          ? 'btn_primary'
          : disabled
          ? 'bg-gray-300 text-gray-900'
          : 'btn_outline '
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
