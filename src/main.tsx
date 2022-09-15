import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import theme from './styles/index';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
