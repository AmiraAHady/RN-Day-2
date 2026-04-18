import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const UserList = () => {
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
    <ScrollView>
      {usersData.map((u) => (
        <View key={u.id}>
          <Text>{u.firstName}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserList;
