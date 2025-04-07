import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import MiniContextProvider from '../context/MiniContext';
import ProjectDetail from '../pages/ProjectDetail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#6C7F7D',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    success: {
      main: '#28A745',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#c33d3d',
    },
  
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontWeight: '700',
      fontFamily: 'Roboto Slab',
    },
    h2: {
      fontWeight: '600',
    },
    h3: {
      fontWeight: '500',
    },
    button: {
      fontWeight: '500',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          // color: '#212529'
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
              <Route path='/projects/:projectId' element={<ProjectDetail/>}/>
            </Routes>
          </MiniContextProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
