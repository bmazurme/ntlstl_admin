import React, { useContext } from 'react';

import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import ThemeContext from '../../context/theme-context';

export default function ThemeButton() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const onToggle = () => {
    setIsDark(isDark === 'light' ? 'dark' : 'light');
    localStorage.setItem('ms-theme', isDark === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      color="inherit"
      aria-label="theme"
      size="small"
      onClick={onToggle}
    >
      {isDark === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
    </IconButton>
  );
}
