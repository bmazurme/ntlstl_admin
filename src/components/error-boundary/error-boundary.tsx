import React from 'react';
import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import Content from '../content';

import { textCenter, boxProps, boxSecondaryProps } from './error-boundary-wrapper.style';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Content
      children={(
        <Box sx={boxProps}>
          <Typography
            textAlign="center"
            variant="h2"
            gutterBottom
          >
            APP-ERROR
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            gutterBottom
          >
            {error.message}
          </Typography>
          <Box sx={boxSecondaryProps}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={textCenter}
            >
              Try to
            </Typography>
            <Button
              onClick={resetErrorBoundary}
              variant="text"
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={textCenter}
              >
                Reload app
              </Typography>
            </Button>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={textCenter}
            >
              or
            </Typography>
            <Button
              onClick={resetErrorBoundary}
              variant="text"
              size="small"
              href="/"
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={textCenter}
              >
                Go to homepage
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    />
  );
}

export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary onReset={() => console.log('reset')} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
