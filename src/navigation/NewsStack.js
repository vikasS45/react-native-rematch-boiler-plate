import React, {useEffect} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Colors, View, Typography} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import News from '../screens/contents/News';
import SingleChat from '../screens/contents/Chats/SingleChat';
import PersonProfile from '../screens/contents/Chats/PersonProfile';
import {Dots, BackButton} from '../assets/svgs';
import {Layout} from '../screens/Layout';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const HomeStackNavigator = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.PrimaryColor,
  },
  headerTitleAlign: 'left',
  headerTintColor: 'white',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontFamily: Typography.primaryFontFamily,
    alignSelf: 'flex-start',
    width: '100%',
  },
};

export const NewsNavigator = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: routeName === 'News' || typeof routeName === 'undefined',
    });
  }, [navigation, routeName]);
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen
        name="News"
        component={Layout(News)}
        options={{
          headerShown: false,
        }}
      />
      {/* <HomeStackNavigator.Screen
        name="SingleChat"
        component={SingleChat}
        screenOptions={{
          tabBarVisible: false,
        }}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <HomeStackNavigator.Screen
        name="PersonProfile"
        component={Layout(PersonProfile)}
        options={{
          headerShown: false,
        }}
      /> */}
    </HomeStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  marginRight10: {
    marginRight: 10,
  },
});
