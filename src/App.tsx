import { Menu } from 'components/Menu';

import { theme } from 'themes';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from 'Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
        <Menu />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
