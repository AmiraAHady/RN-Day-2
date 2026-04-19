import { View, Text } from 'react-native';
import React from 'react';

const UserDetails = ({ route }) => {
  console.log(route);
  const { user } = route.params || {};
  console.log(route.params);
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">User Details</Text>
      <Text className="text-xl font-bold">
        {user.firstname}
        {user.lastname}
      </Text>
    </View>
  );
};

export default UserDetails;
