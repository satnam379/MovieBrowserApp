import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Image
        style={{
          width: 20,
          height: 20,
          tintColor: 'black',
          marginRight: 16,
          padding: 4,
        }}
        source={require('../assets/search.png')}
      />
    </TouchableOpacity>
  );
};

export default Search;
