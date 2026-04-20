import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/home';
import AboutScreen from 'screens/about';
import UserStack from './userStack';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-variant-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}></Tab.Screen>
      {/* <Tab.Screen
        name="Users"
        component={UserStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" size={size} color={color} />
          ),
        }}></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
