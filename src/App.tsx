import React from 'react';
import './App.css';
import Task from './pages/task';
import i18next from './lib/i18n';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <div className="App">
        <Task />
      </div>
    </I18nextProvider>
    
  );
}

export default App;
