import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { useTheme } from 'contexts/themeContext';

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  // const { theme, toggleTheme } = useTheme();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">HomeScreen</Text>

      {/* <Button title="ToggleTheme" onPress={toggleTheme}></Button> */}







      {/* <Button title="Open Model" onPress={() => setVisible(true)}></Button>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
            <Text>Hello From Modal</Text>
            <Button title="Close Model" onPress={() => setVisible(false)}></Button>
          </View>
        </View>
      </Modal>
      <Button
        title="Go To Profile"
        color="green"
        onPress={() => navigation.navigate('profile')}></Button> */}
      {/* <Button
        title="Go To About"
        color="green"
        onPress={() => navigation.navigate('About')}></Button> */}
      {/* <Button
        title="Go To BTNs"
        color="green"
        onPress={() => navigation.navigate('btnscreens')}></Button>
      <Button
        title="Go To Users"
        color="green"
        onPress={() => navigation.navigate('Users')}></Button> */}
    </View>
  );
};

export default HomeScreen;
