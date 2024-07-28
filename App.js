import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NowPlayingScreen from './screens/NowPlayingScreen';
import PopularScreen from './screens/PopularScreen';
import TopRatedScreen from './screens/TopRatedScreen';
import UpcomingScreen from './screens/UpcomingScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import {Text, Platform, Image} from 'react-native';
import SearchScreen from './screens/SearchScreen';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MovieStack = ({category}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={
          category === 'now_playing'
            ? 'Now Playing'
            : category === 'popular'
            ? 'Popular'
            : category === 'top_rated'
            ? 'TopRated'
            : 'Upcoming'
        }
        options={() => ({
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#FFCA02',
          },
          headerRight: () => <Search />,

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
        {() =>
          category === 'now_playing' ? (
            <NowPlayingScreen category={category} />
          ) : category === 'popular' ? (
            <PopularScreen category={category} />
          ) : category === 'top_rated' ? (
            <TopRatedScreen category={category} />
          ) : (
            <UpcomingScreen category={category} />
          )
        }
      </Stack.Screen>
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Now Playing Tab"
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? 'blue' : 'grey',
                }}
                source={require('./assets/play.png')}
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
          })}>
          {() => <MovieStack category="now_playing" />}
        </Tab.Screen>
        <Tab.Screen
          name="Popular Tab"
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  width: 16,
                  height: 18,
                  tintColor: focused ? 'blue' : 'grey',
                }}
                source={require('./assets/subscriber.png')}
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
            ),
          })}>
          {() => <MovieStack category="popular" />}
        </Tab.Screen>
        <Tab.Screen
          name="Top Rated Tab"
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? 'blue' : 'grey',
                }}
                source={require('./assets/star.png')}
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
        <Tab.Screen
          name="Upcoming Tab"
          options={() => ({
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  width: 16,
                  height: 16,
                  tintColor: focused ? 'blue' : 'grey',
                }}
                source={require('./assets/check-in.png')}
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
