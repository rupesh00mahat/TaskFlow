import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import MiniContextProvider from '../context/MiniContext';

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MiniContextProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="project" element={<Projects />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </MiniContextProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
