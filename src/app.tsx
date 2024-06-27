import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import MainPage from './pages/main-page';
import KitPage from './pages/kit-page';
import NotFoundPage from './pages/not-found-page';

// import useHistory from './hooks/use-history';
import ThemeContext from './context/theme-context';

// import useWindowDimensions, { getVisualProps } from './hooks/use-window-dimensions';
import useDarkTheme from './hooks/use-dark-theme';

import { Urls } from './utils';

export default function App() {
  const { providerValue } = useDarkTheme();
  // const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    location.state = null;
  }, []);

  return (
    <ThemeContext.Provider value={providerValue}>
      <Routes location={location.state?.pathname || location}>
        <Route path={Urls.BASE.INDEX} element={(<MainPage />)} />
        <Route path={Urls.KIT.INDEX} element={(<KitPage />)} />
        <Route path={Urls[404]} element={(<NotFoundPage />)} />
      </Routes>

      {/* {location.state?.pathname
        && (
          <Routes>
            <Route path={Urls.SUPPORT.INDEX} element={(<SupportModalPage />)} />
          </Routes>
        )} */}
    </ThemeContext.Provider>
  );
}
