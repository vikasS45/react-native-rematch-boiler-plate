import React, {useEffect} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Predictions from '../screens/contents/Predictions';
import {StyleSheet} from 'react-native';
import {Colors, View, Typography} from 'react-native-ui-lib';
import {Dots, BackButton} from '../assets/svgs';
import {Layout} from '../screens/Layout';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const ProfileStackNavigator = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.white,
  },
  headerTitleAlign: 'left',
  headerTintColor: 'black',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontFamily: Typography.primaryFontFamily,
    alignSelf: 'flex-start',
    width: '100%',
  },
};

export const PredictionNavigator = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible:
        routeName === 'Predictions' || typeof routeName === 'undefined',
    });
  }, [navigation, routeName]);
  return (
    <>
      <ProfileStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <ProfileStackNavigator.Screen
          name="Predictions"
          component={Layout(Predictions)}
          options={{
            headerShown: false,
          }}
        />
      </ProfileStackNavigator.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  marginRight10: {
    marginRight: 10,
  },
});
