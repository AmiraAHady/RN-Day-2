import { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();
// provider
const lightTheme = {
  background: '#ffffffff',
  text: '#00000',
};
const darkTheme = {
  background: '#121212',
  text: '#ffffffff',
};

export const ThemeProvider = ({ children }) => {
  const systemMode = Appearance.getColorScheme();
  const [theme, setTheme] = useState(systemMode === 'dark' ? darkTheme : lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
