import React from 'react'

const InputField = ({ label, type, value, placeholder, onChange, onKeyDown, disabled, required, autoFocus }) => {
  
  const inputValue = value || "";
  
  return (
    <label>
      <p className='text-xl tracking-wider'>{label}</p>
      <input
        value={inputValue}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        className="input"
      />
    </label>
  );
};


export default InputField