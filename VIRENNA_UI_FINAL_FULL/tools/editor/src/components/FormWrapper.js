
import React from 'react';
import Form from '@rjsf/core';
import EthicsGuard from './EthicsGuard';
import AutoSaveBar from './AutoSaveBar';
import { validateData } from '../utils/validation';

export default function FormWrapper({ schema }) {
  const [formData, setFormData] = React.useState({});
  const handleChange = ({ formData }) => setFormData(formData);
  return (
    <div>
      <Form schema={schema} formData={formData} onChange={handleChange} validate={validateData} />
      <AutoSaveBar formData={formData} />
      <EthicsGuard formData={formData} />
    </div>
  );
}
