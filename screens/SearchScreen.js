// screens/SearchScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {searchMovies} from'../services/services';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (query, page) => {
    setLoading(true);
    try {
      const data = await searchMovies(query, page);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
        console.log("here", query, page)
      fetchMovies(query, page);
    }
  }, [query, page]);

  const handleSearch = (text) => {
    setQuery(text);
    setMovies([]);
    setPage(1);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const navigateToDetails = (movieId) => {
    navigation.navigate('MovieDetail', { movieId });
  };

  const renderItem = ({ item }) => (
    // <TouchableOpacity style={styles.boxShadow} onPress={() => navigateToDetails(item.id)}>
    //   <View style={styles.item}>
    //     <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
    //     <View style={styles.info}>
    //       <Text style={styles.title}>{item.title}</Text>
    //       <Text>{item.release_date}</Text>
    //       <Text>{item.vote_average}</Text>
    //     </View>
    //   </View>
    // </TouchableOpacity>
    <TouchableOpacity  style={styles.boxShadow} onPress={() => navigateToDetails(item.id)}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={{ width: 100, height: 150 }}
            />
            <View style={{ marginLeft: 10, width:'60%' }}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.release_date}</Text>
              <Text>Rating: {item.vote_average}</Text>
            </View>
          </View>
        </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for movies..."
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  boxShadow:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    borderRadius: 10,
    margin: 16
  },
  item: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderTopLeftRadius:10
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
