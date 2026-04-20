import { View, Text, Pressable, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const AboutScreen = () => {
  return (
    // <View className="flex-1 items-center justify-center gap-4">
    <>
      <Text className="text-xl font-bold">About Screen</Text>
      <View>
        {/* <Pressable
          onPress={() => {
            console.log('hello');
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
           <Text style={styles.text}>Press Me</Text>
        </Pressable> */}

        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10 }}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>

      {/* <Button title='button 1' color="pink"></Button> */}
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
export default AboutScreen;
