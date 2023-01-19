import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from './utils/AppBar';
import UserMenu from './utils/UserMenu';
import { Anchor } from '../types/components';

interface LayoutProps {
  title: string
  subtitle: string
  children: React.Component
}

const Layout = (layoutProps: LayoutProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { children, title, subtitle } = layoutProps
  const anchor = 'left'

  const openDrawer = (anchorValue: Anchor) => {
    setState({ ...state, [anchorValue]: true });
  }

  const closeDrawer = (anchorValue: Anchor) => {
    setState({ ...state, [anchorValue]: false });
  }

  return (
    <React.Fragment key={anchor}>
      <>
        <AppBar
          handleToggle={() => openDrawer(anchor)}
          title={title}
        />
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

export default Layout
