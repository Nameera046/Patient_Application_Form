import React from "react";

const SelectField = ({ label, value, onChange, options, name, required }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      >
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;