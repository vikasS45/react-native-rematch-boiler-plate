import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography, Colors} from 'react-native-ui-lib';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prediction Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: Typography.primaryELHeading,
    fontFamily: Typography.primaryFontFamilyMedium,
  },
});
