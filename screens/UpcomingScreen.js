import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {getMovies} from'../services/services';
import {useNavigation} from '@react-navigation/native';

const UpcomingScreen = ({category}) => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async page => {
    try {
      setLoading(true);
      const data = await getMovies(category, page);
      setMovies(data.results);
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  if (loading && movies.length === 0) {
    return (
      <View style={{flex: 1, marginTop: '60%'}}>
        <ActivityIndicator size="large" color="grey" />
      </View>
    );
  }
  const navigateToDetails = movieId => {
    navigation.navigate('MovieDetail', {movieId});
  };

  return (
    <FlatList
      data={movies}
      contentContainerStyle={{paddingBottom: 40}}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.boxShadow}
          onPress={() => navigateToDetails(item.id)}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={{width: 100, height: 150}}
            />
            <View style={{marginLeft: 10, width: '60%'}}>
              <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
              <Text>{item.release_date}</Text>
              <Text>Rating: {item.vote_average}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? <ActivityIndicator size="small" color="grey" /> : null
      }
    />
    // <View></View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    borderRadius: 10,
    margin: 16,
  },
});

export default UpcomingScreen;
