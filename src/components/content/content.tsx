import React from 'react';
import type { PropsWithChildren } from 'react';

import { Box } from '@mui/material';

import Header from '../header';
import Footer from '../footer';

export default function Content({ children, header, footer }
  : PropsWithChildren & { header?: boolean; footer?: boolean; }) {
  return (
    <Box component="main">
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </Box>
  );
}
