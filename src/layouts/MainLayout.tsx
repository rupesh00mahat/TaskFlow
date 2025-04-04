import { ArrowBack, Assignment, ChevronLeft, Dashboard, Menu, Settings } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
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
  const { state, dispatch } = useContext(MiniContext);

  const { activeSidebar } = state;

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            role="button"
            aria-label="toggle sidebar"
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
          PaperProps={{ sx: { width: '30%' } }}
        >
          <Box>
            <IconButton
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <ChevronLeft fontSize='large' />
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <Link
                component={NavLink}
                to={'/'}
                sx={
                  activeSidebar == 'dashboard'
                    ? { bgcolor: 'secondary.main', width: '100%', p: 2 }
                    : { width: '100%', p: 2 }
                }
              >
                <ListItemButton
                  onClick={() => {
                    dispatch({ type: 'CHANGE_ACTIVE_PAGE', payload: 'dashboard' });
                  }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Dashboard />
                  <span>Dashboard</span>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                component={NavLink}
                to={'/project'}
                sx={
                  activeSidebar == 'project'
                    ? { bgcolor: 'gray', width: '100%', p: 2 }
                    : { width: '100%', p: 2 }
                }
              >
                <ListItemButton
                  onClick={() => {
                    dispatch({ type: 'CHANGE_ACTIVE_PAGE', payload: 'project' });
                  }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Assignment />
                  <span>Project</span>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                component={NavLink}
                to={'/settings'}
                sx={
                  activeSidebar == 'settings'
                    ? { bgcolor: 'gray', width: '100%', p: 2 }
                    : { width: '100%', p: 2 }
                }
              >
                <ListItemButton
                  onClick={() => {
                    dispatch({ type: 'CHANGE_ACTIVE_PAGE', payload: 'settings' });
                  }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
                    width: '100%',
                    height: '100%',
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
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
