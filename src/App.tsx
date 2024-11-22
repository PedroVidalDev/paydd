import { Menu } from 'components/Menu';

import { theme } from 'themes';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from 'Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
