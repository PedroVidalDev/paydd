import { Debt } from 'pages/Debt';
import { Menu } from 'components/Menu';

import { theme } from 'themes';
import { ThemeProvider } from 'styled-components';
import { MenuType } from 'components/Menu/types';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Debt />
      <Menu type={MenuType.CREDIT} />
    </ThemeProvider>
  );
}

export default App;
