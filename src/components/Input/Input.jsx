import React from 'react';

export const Input = (props) => {
  const {
    id,
    label,
    autoComplete,
    name,
    type,
    placeholder,
    className,
    required = true,
    pattern,
    error,
    key,
  } = props;
  return (
    <label htmlFor={id} className="block">
      <input
        id={id}
        key={key}
        label={label}
        className={className}
        type={type}
        name={name}
        pattern={pattern}
        error={error}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
};
