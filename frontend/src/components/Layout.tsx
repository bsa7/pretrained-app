import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from './utils/AppBar';
import UserMenu from './utils/UserMenu';
import { Anchor } from '@/types/components';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

interface LayoutProps {
  title: string
  subtitle: string
  children: React.Component
}

export default function Layout(layoutProps: LayoutProps) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { children, title, subtitle } = layoutProps
  const anchor = 'left'

  const openDrawer = (anchor: Anchor) => {
    setState({ ...state, [anchor]: true });
  }

  const closeDrawer = (anchor: Anchor) => {
    setState({ ...state, [anchor]: false });
  }

  return (
    <React.Fragment key={anchor}>
      <>
        <AppBar
          handleToggle={() => openDrawer(anchor)}
          title={title}
          >
        </AppBar>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={() => closeDrawer(anchor)}
          >
          <UserMenu anchor={anchor} onChoose={() => closeDrawer(anchor)}/>
        </Drawer>
          <Container>
        <Box sx={{ display: 'block', width: '100%', marginTop: '80px', padding: '20px' }}>
          {children}
        </Box>
          </Container>
      </>
    </React.Fragment>
  );
}
