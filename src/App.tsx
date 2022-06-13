import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { apiRoute } from './api/areas/areas';


import { Footer, Header, MainContent } from './modules';
import { darkTheme, defaultTheme } from './themes';
import { useFetch } from './useFetch';


const themeDefault = createTheme(defaultTheme);
const themeDark = createTheme(darkTheme);



const App = () => {
  const { data } = useFetch(apiRoute);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeDefault}>
      <Header
        content={data?.headerSection}
        onThemeToggle={() => setIsDarkTheme((isDark) => !isDark)}
        isDarkTheme={isDarkTheme}
      />
      <MainContent
        content={{
          primarySections: data?.primarySections,
          secondarySections: data?.secondarySections,
        }}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
