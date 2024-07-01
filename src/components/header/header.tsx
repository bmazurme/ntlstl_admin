import React from 'react';

import {
  Box, AppBar, Toolbar,
} from '@mui/material';

import Logo from '../logo';
import ThemeButton from '../theme-button';
import HeaderMenu from '../header-menu';

export default function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <HeaderMenu />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ThemeButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
