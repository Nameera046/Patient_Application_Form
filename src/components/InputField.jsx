import React from "react";

const InputField = ({ label, type, value, onChange, placeholder, name, required, className }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={`form-control ${className || ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  );
};
export default InputField;