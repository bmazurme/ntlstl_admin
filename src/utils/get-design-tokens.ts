import { PaletteMode } from '@mui/material';
import { indigo, grey, blueGrey } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: indigo,
        divider: indigo[200],
        background: {
          default: '#fff',
          paper: grey[50],
        },
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: blueGrey,
        divider: blueGrey[700],
        background: {
          default: grey[900],
          paper: blueGrey[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});
