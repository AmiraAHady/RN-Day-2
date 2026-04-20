import { View, Text, Button, Modal, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'contexts/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();

  const showAlert = () => {
    Alert.alert('Add Product', 'Are you Sure to add this product to Cart?', [
      {
        text: 'OK',
        onPress: () => {
          console.log('Ok Pressed!');
        },
      },
      {
        text: 'Later',
        onPress: () => {
          console.log('Later Pressed!');
        },
      },
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel Pressed!');
        },
      },
    ]);
  };
  const saveData = async () => {
    try {
      let obj = {
        userName: 'Ali',
        age: 12,
      };
      await AsyncStorage.setItem('user', JSON.stringify(obj));
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('user');
      // console.log(`user number is ${value}`);
      console.log(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.txt, { color: theme.text }]}>HomeScreen</Text>

      {/* <Button title="ToggleTheme" color="green" onPress={toggleTheme}></Button>
      <Button title="show Alert" color="pink" onPress={showAlert}></Button> */}
      <Button title="add Data" color="green" onPress={saveData}></Button>
      <Button title="Get Data" color="pink" onPress={getData}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  txt: {
    fontSize: 20,
    margin: 10,
  },
});
export default HomeScreen;
