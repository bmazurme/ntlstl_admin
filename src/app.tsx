import React, { Suspense, lazy, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';

import ThemeContext from './context/theme-context';
import ErrorBoundaryWrapper from './components/error-boundary';
import useDarkTheme from './hooks/use-dark-theme';
import { useAppLocation } from './hooks/use-app-location';

import { getDesignTokens } from './utils/get-design-tokens';
import { Urls } from './utils/constant';

const MainPage = lazy(() => import('./pages/main-page'));
const KitPage = lazy(() => import('./pages/kit-page'));
const NotFoundPage = lazy(() => import('./pages/not-found-page'));

export default function App() {
  const location = useAppLocation();
  const background = location.state?.pathname;
  const { providerValue } = useDarkTheme();
  const theme = useMemo(
    () => createTheme(getDesignTokens(providerValue.isDark)),
    [providerValue.isDark],
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundaryWrapper>
          <Suspense>
            <Routes location={background || location}>
              <Route path={Urls.BASE.INDEX} element={(<MainPage />)} />
              <Route path={Urls.KIT.INDEX} element={(<KitPage />)} />
              <Route path={Urls[404]} element={(<NotFoundPage />)} />
            </Routes>
          </Suspense>
          {background
          && (
            <Suspense>
              <Routes>
                {/* <Route path={Urls.USERS.CURRENT_EDIT} element={(<UserEditModalPage />)} />
                <Route path={Urls.CARDS.CURRENT} element={(<CardModalPage />)} /> */}
              </Routes>
            </Suspense>
          )}
          <ToastContainer theme={providerValue.isDark} />
        </ErrorBoundaryWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
