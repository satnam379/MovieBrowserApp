
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlayingScreen from './screens/NowPlayingScreen';
import PopularScreen from './screens/PopularScreen';
import TopRatedScreen from './screens/TopRatedScreen';
import UpcomingScreen from './screens/UpcomingScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, Platform } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MovieStack = ({category}) => {
   return(
    <Stack.Navigator>
    <Stack.Screen name={category==="now_playing"? 'Now Plyaing': category==="popular"?'Popular': category==="top_rated"?'Top Rated':'Upcoming'} options={() => ({
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#FFCA02',
          },
            headerRight: () =>  <Search />,
       
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: {
            paddingTop: 5,
            ...Platform.select({
              android: {
                paddingBottom: 5,
              },
            }),
          },
          })}>
    {() =>  category==="now_playing"?
    <NowPlayingScreen category={category}/>: 
    category==="popular"?<PopularScreen category={category}/>:
    category==="top_rated"?<TopRatedScreen category={category}/>:
   <UpcomingScreen category={category}/>}
    </Stack.Screen>
    <Stack.Screen name="MovieDetail"  component={MovieDetailScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>
   )
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Now Playing"  options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
            name="movie-creation"
              size={20}
              color={focused ? 'blue' : 'grey'}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 12,
                color: focused ? 'blue' : 'grey',
              }}>
              Now Playing
            </Text>
          ),
        })}
        >
          {() => <MovieStack category="now_playing" />}
        </Tab.Screen >
        <Tab.Screen name="Popular" options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="movie-creation"
              size={20}
              color={focused ? 'blue' : 'grey'}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 12,
                color: focused ? 'blue' : 'grey',
              }}>
              Popular
            </Text>
          )
        })}>
          {() => <MovieStack category="popular" />}
        </Tab.Screen>
        <Tab.Screen name="Top Rated" options={() => ({
         headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="movie-creation"
              size={20}
              color={focused ? 'blue' : 'grey'}
            />
          ),
          tabBarLabel: ({focused, color}) => (
<Text
              allowFontScaling={false}
              style={{
                fontSize: 12,
                color: focused ? 'blue' : 'grey',
              }}>
              Top Rated
            </Text>
          ),
        })}>
          {() => <MovieStack category="top_rated" />}
        </Tab.Screen>
        <Tab.Screen name="Upcoming" options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="movie-creation"
              size={20}
              color={focused ? 'blue' : 'grey'}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
            allowFontScaling={false}
            style={{
              fontSize: 12,
              color: focused ? 'blue' : 'grey',
            }}>
            Upcoming
          </Text>
          ),
        })}>
          {() => <MovieStack category="upcoming" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

