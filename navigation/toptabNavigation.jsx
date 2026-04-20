import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen from 'screens/about';
import HomeScreen from 'screens/home';
import UserList from 'screens/Users';
import UserDetails from 'screens/UserDetails';
import UserStack from './userStack';

const Tab = createMaterialTopTabNavigator();
const ToptabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: 'pink' },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'blue',
        swipeEnabled: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="About" component={AboutScreen}></Tab.Screen>
      <Tab.Screen name="Users" component={UserStack} ></Tab.Screen>
      {/* <Tab.Screen name="Users" component={UserList}></Tab.Screen>
      <Tab.Screen
        name="userDetails"
        component={UserDetails}></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default ToptabNavigation;
