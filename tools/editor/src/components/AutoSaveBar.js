
import React from 'react';

export default function AutoSaveBar({ formData }) {
  React.useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('autoSaveEMCO', JSON.stringify(formData));
    }
  }, [formData]);

  return <div className="auto-save">✔ AutoSave aktiv</div>;
}
