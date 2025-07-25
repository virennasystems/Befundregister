
import React from 'react';

export default function SmartInput({ label, value, onChange }) {
  return (
    <div className="smart-input">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
