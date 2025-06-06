'use client';

import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}