import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Search = ({title, onPress}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
    <FontAwesome
 size={30}
 color={'#search'}
 name={'user-circle-o'}
 style={{marginRight:16}}
/>
 </TouchableOpacity>   
  )
};

export default Search;

// export const styles = StyleSheet.create({
//   mainContainer: {
//     width: width,
//     height: 50,
//     ...ShadowStyles.profileItemShadow,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   innerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   shadowInnerConatainer: {
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//     backgroundColor: 'white',
//     borderRadius: 4,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 4,
//     marginTop: 4,
//   },
//   backButtonStyle: {
//     marginLeft: 10,
//   },
//   headerTextStyle: {
//     fontFamily: FontFamily.Bold,
//     fontSize: 16,
//     color: theme.light.colors.label,
//     paddingLeft: 10,
//   },
// });