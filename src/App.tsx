import { Menu } from 'components/Menu';

import { theme } from 'themes';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from 'Routes';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from 'contexts/MenuContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <BrowserRouter>
          <AppRoutes />
          <Menu />
        </BrowserRouter>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
