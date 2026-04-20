import { View, Text, Button, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [myImage, setImage] = useState('');
  const pickImage = async () => {
    // 1-request Permission
    const permision = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permision.granted) {
      alert('Permision Denied');
      return;
    }
    // 2-open image Picker and select image
    const res = await ImagePicker.launchImageLibraryAsync();
    setImage(res.assets[0].uri);

    // 3-view Image
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick an Image" onPress={pickImage}></Button>
      {myImage && (
        <Image source={{ uri: myImage }} style={{ width: 200, height: 200, marginTop: 20 }}></Image>
      )}
    </View>
  );
};

export default Profile;
