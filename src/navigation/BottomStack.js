import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Flame,
  FlameFocus,
  Chats,
  ChatsFocused,
  Profile,
  ProfileFocused,
} from '../assets/svgs';
import {NewsNavigator} from './NewsStack';
import {PredictionNavigator} from './PredictionStack';
import {Typography, Colors} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'News') {
            iconName = 'book';
          } else if (route.name === 'Predictions') {
            iconName = 'videocamera';
          }
          return focused ? (
            <>
              {/* <View style={styles.indicator} /> */}
              <AntDesign name={iconName} size={25} color={color} />
            </>
          ) : (
            <AntDesign name={iconName} size={25} color={color} />
          );
        },
      })}
      tabBarOptions={{
        // showLabel: false,
        // labelStyle: styles.labelStyle,
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.lightWhite,
        style: styles.tabStyle,
      }}>
      <Tab.Screen
        name="News"
        component={NewsNavigator}
        options={{
          title: 'News',
        }}
      />
      <Tab.Screen
        name="Predictions"
        component={PredictionNavigator}
        options={{
          title: 'Predictions',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: Typography.primaryFontFamilyMedium,
    fontSize: Typography.primaryELHeading,
    fontWeight: '400',
    marginBottom: 9,
  },
  tabStyle: {
    height: Platform.OS === 'ios' ? 70 : 60,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingBottom: 10,
  },
});
