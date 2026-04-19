import { NavigationContainer } from '@react-navigation/native';
import './global.css';
// import StackNavigation from 'navigation/stackNavigation';
import ToptabNavigation from 'navigation/toptabNavigation';
import BottomTabNavigation from 'navigation/bottomTabNavigation';

export default function App() {
  return <NavigationContainer>
    {/* <StackNavigation /> */}
    {/* <ToptabNavigation /> */}
    <BottomTabNavigation />
  </NavigationContainer>;
}
