import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';
import {getMovieDetail} from '../services/services';

const MovieDetailScreen = ({route}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetail(movieId);
        setMovie(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <View style={{flex: 1, marginTop: '60%'}}>
        <ActivityIndicator size="large" color="grey" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={{width: '100%', height: 300}}
      />
      <View style={{padding: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{movie.title}</Text>
        <Text>Release Date: {movie.release_date}</Text>
        <Text>Rating: {movie.vote_average}</Text>
        <Text>Overview:</Text>
        <Text>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
