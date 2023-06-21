import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18nConfig from './i18ns/i18n.config';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
    <I18nextProvider i18n={i18nConfig}>
        <App />
    </I18nextProvider>
);