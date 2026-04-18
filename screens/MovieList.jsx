/* eslint-disable no-unused-expressions */
import { View, Text, FlatList, Image, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
let apiKey = '0ab69d58b9382bc390a939b7dbbe713b';
const MovieList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setrefreshing] = useState(false);

  const fetchData = async (pageNumber = 1) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pageNumber}`
      );
      const jsonData = await res.json();
      setData(jsonData.results);
      //   console.error(jsonData.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);
  const renderItem = ({ item }) => (
    <View className="flex-row border-b border-gray-200">
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        className="mr-3 h-28 w-20 rounded-lg"></Image>
      <View className="flex-1 justify-center">
        <Text className="mb-1 text-base font-bold text-gray-900">{item.title}</Text>
        <Text numberOfLines={2} className="text-sm text-gray-600">
          {item.overview}
        </Text>
      </View>
    </View>
  );
  const loadMoreItems = () => {
    setPage((prev) => prev + 1);
  };

  const onRefresh = () => {
    setrefreshing(true);
    setPage(1);
    fetchData(page);
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={loadMoreItems}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>
      }></FlatList>
  );
};

export default MovieList;
