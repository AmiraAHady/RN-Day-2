import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import StackNavigation from 'navigation/stackNavigation';
import ToptabNavigation from 'navigation/toptabNavigation';
import BottomTabNavigation from 'navigation/bottomTabNavigation';
import DrawerNavigation from 'navigation/drawerNavigation';
import { ThemeProvider } from 'contexts/themeContext';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StackNavigation />
        {/* <ToptabNavigation /> */}
        {/* <BottomTabNavigation /> */}
        {/* <DrawerNavigation /> */}
      </ThemeProvider>
    </NavigationContainer>
  );
}

//
