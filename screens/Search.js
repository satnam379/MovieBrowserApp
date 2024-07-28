import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  const navigateTosearch = ()=>{
    navigation.navigate('Search')
  }
  
  return (
    <TouchableOpacity onPress={navigateTosearch}>
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
