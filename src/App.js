// src/App.js

import logo from './logo.svg'; // Ensure this path is correct
// import './App.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function App() {
  const { t } = useTranslation('common');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('description')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('welcome')}
        </a>
      </header>
    </div>
  );
}

// Export the component
export default App;
