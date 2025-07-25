
import React from 'react';
import FormWrapper from './components/FormWrapper';
import { schema } from './schema/EMCO_v4.2_schema';
import { UserProvider } from './context/UserContext';
import './styles/theme.css';

function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>🧠 VIRENNA EMCO Editor</h1>
        <FormWrapper schema={schema} />
      </div>
    </UserProvider>
  );
}
export default App;
