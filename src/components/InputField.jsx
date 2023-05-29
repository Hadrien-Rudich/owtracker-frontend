import React from 'react';

function InputField({
  label,
  type,
  value,
  placeholder,
  onChange,
  onKeyDown,
  disabled,
  required,
}) {
  const inputValue = value || '';

  return (
    <label>
      <p className="sm:text-xl text-lg">{label}</p>
      <input
        value={inputValue}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="input"
      />
    </label>
  );
}

export default InputField;
