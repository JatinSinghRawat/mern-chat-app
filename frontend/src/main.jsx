import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import for React 18
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create the root using createRoot
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);