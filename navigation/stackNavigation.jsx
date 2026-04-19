/* eslint-disable no-unused-labels */
import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/home';
import AboutScreen from 'screens/about';
import UserList from 'screens/Users';
import UserDetails from 'screens/UserDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'green',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About Screen',
          headerStyle: { backgroundColor: 'yellow' },
        }}></Stack.Screen>
      <Stack.Screen name="Users" component={UserList}></Stack.Screen>
      <Stack.Screen
        name="userDetails"
        component={UserDetails}
        options={({ route }) => ({
          title: `${route.params.user.firstname}`,
        })}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;
