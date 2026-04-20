import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from 'screens/home';
import AboutScreen from 'screens/about';
import UserList from 'screens/Users';
import UserStack from './userStack';

let Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About Screen',
          headerStyle: { backgroundColor: 'yellow' },
        }}></Drawer.Screen>
      <Drawer.Screen name="Users" component={UserStack}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
