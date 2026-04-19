/* eslint-disable no-unused-labels */
import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/home';
import AboutScreen from 'screens/about';
import UserList from 'screens/Users';
import UserDetails from 'screens/UserDetails';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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

export default UserStack;
