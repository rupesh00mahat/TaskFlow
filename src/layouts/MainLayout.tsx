import { ArrowBack, Assignment, ChevronLeft, Dashboard, Menu, Settings } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MiniContext } from '../context/MiniContext';

const MainLayout: React.FC = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const { state,dispatch } = useContext(MiniContext);

  const {activeSidebar} = state;

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
          role='button'
          aria-label='toggle sidebar'
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
        <Drawer
        data-testid="sidebar"
          variant="persistent"
          open={openDrawer}
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          <Box>
            <IconButton
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <ChevronLeft />
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <Link component={NavLink} to={'/'} sx={activeSidebar == 'dashboard' ? {bgcolor: 'gray'}: {}}>
                <ListItemButton
                  onClick={() => {
                    dispatch({ type: 'CHANGE_ACTIVE_PAGE', payload: 'dashboard' });
                  }}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}
                >
                  <Dashboard />
                  <span>Dashboard</span>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link component={NavLink} to={'/project'} sx={activeSidebar == 'project' ? {bgcolor: 'gray'}: {}}>
                <ListItemButton
                  onClick={() => {
                    dispatch({ type: 'CHANGE_ACTIVE_PAGE', payload: 'project' });
                  }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Assignment />
                  <span>Project</span>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link component={NavLink} to={'/settings'} sx={activeSidebar == 'settings' ? {bgcolor: 'gray'}: {}}>
                <ListItemButton
                onClick={()=>{
                  dispatch({type: 'CHANGE_ACTIVE_PAGE', payload: 'settings'})

                }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Settings />
                  <span>Settings</span>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
