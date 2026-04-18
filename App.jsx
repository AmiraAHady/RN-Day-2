/* eslint-disable import/no-unresolved */
import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

// import UserList from 'screens/user.jsx';

import ContactList from 'screens/contactList';
import MovieList from 'screens/MovieList';

export default function App() {
  const [isActive,setIsActive]=useState(true)
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={mystyles.container}>
        {/* <UserList /> */}
        {/* <ContactList /> */}
        <MovieList />
        {/* <Text>Dark Mood</Text>
        <Switch value={isActive}
        onValueChange={()=>setIsActive(!isActive)}
        thumbColor={isActive?'#8850b9':'#2bd46c'}
        trackColor={{false:'black',true:'red'}}
        ></Switch> */}
        {/* <Text style={mystyles.txt}>Welcome to Nativewind!</Text>
        <Text style={mystyles.txt}>Welcome to Nativewind!</Text>
        <Text style={mystyles.txt}>Welcome to Nativewind!</Text>
        <Text style={mystyles.txt}>Welcome to Nativewind!</Text>
        <Text style={mystyles.txt}>Welcome to Nativewind!</Text> */}
      </View>
    </SafeAreaProvider>
  );
}

const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
});
