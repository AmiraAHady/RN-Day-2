import { View, Text, ScrollView, Pressable, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const UserList = ({ navigation }) => {
  const [usersData, setUserData] = useState([]);
  async function fetchusers() {
    let res = await fetch('https://dummyjson.com/users');
    let data = await res.json();
    setUserData(data.users);
  }
  useEffect(() => {
    fetchusers();
  }, []);
  return (
    <FlatList
      data={usersData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          className="border-b p-4"
          onPress={() => {
            navigation.navigate('userDetails', {
              user: { firstname: item.firstName, lastname: item.lastName },
            });
          }}>
          <Text className="text-lg">{item.firstName}</Text>
        </Pressable>
      )}></FlatList>
  );
};

export default UserList;
