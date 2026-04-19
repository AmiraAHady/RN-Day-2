import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  // console.log(navigation);
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-xl font-bold">HomeScreen</Text>
      <Button title="Go To About" color="green" onPress={()=>navigation.navigate('About')}></Button>
      <Button title="Go To Users" color="green" onPress={()=>navigation.navigate('Users')}></Button>
    </View>
  );
};

export default HomeScreen;
