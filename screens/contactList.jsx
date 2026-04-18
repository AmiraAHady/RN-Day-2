import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';
// apiKey = '0ab69d58b9382bc390a939b7dbbe713b'
const mySections = [
  {
    id: '0',
    title: 'basic comps',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
  },
  {
    id: '1',
    title: 'List comps',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
  },
];
// const mySections=[]
const ContactList = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>ContactList</Text>
      <SectionList
        sections={mySections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="mt-10 text-center text-gray-500">No Components Founded</Text>
        )}
        ></SectionList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default ContactList;
