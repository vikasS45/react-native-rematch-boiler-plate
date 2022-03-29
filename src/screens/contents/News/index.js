/* eslint-disable max-len */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {Typography, Colors, Image} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home() {
  const rowData = [
    {
      title: 'MCA ground staff to get five star treatments: Report',
      dateTime: '31 mins ago',
      description:
        'MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report',
    },
    {
      title: 'MCA ground staff to get five star treatments: Report 2',
      dateTime: '31 mins ago',
      description:
        'MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report',
    },
    {
      title: 'MCA ground staff to get five star treatments: Report 3',
      dateTime: '31 mins ago',
      description:
        'MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report',
    },
    {
      title: 'MCA ground staff to get five star treatments: Report 4',
      dateTime: '31 mins ago',
      description:
        'MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report MCA ground staff to get five star treatments: Report',
    },
  ];
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>News</Text>
        <View style={styles.row}>
          <View style={styles.filterView}>
            <AntDesign name="filter" size={20} color={Colors.white} />
            <Text style={styles.lightText}>All</Text>
            <AntDesign name="caretdown" size={15} color={Colors.white} />
          </View>
          <View style={styles.filterView}>
            <AntDesign name="sharealt" size={20} color={Colors.white} />
          </View>
        </View>
      </View>
    );
  };

  const Card = ({item}) => {
    return (
      <View style={styles.card}>
        <Image assetName="cardImage" style={styles.image} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.dateTime}>
          <Text style={{color: Colors.coolBlue}}>Cricket Feed : </Text>{' '}
          {item.time}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={[styles.filterView, styles.readMore]}>
          <Text style={[styles.dateTime, {color: Colors.coolBlue}]}>
            {' '}
            Read More
          </Text>
          <AntDesign name="rightcircle" size={15} color={Colors.coolBlue} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
      <Header />
      {rowData.map(item => {
        return <Card item={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: Typography.primaryELHeading,
    fontFamily: Typography.primaryFontFamilyMedium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginVertical: 10,
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: Colors.grey,
    padding: 10,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: Colors.white,
    fontSize: Typography.primaryLHeading,
    fontFamily: Typography.primaryFontFamilyBold,
  },
  lightText: {
    color: Colors.white,
    fontSize: Typography.primarySHeading,
    fontFamily: Typography.primaryFontFamilyRegular,
    marginHorizontal: 5,
  },
  card: {
    marginHorizontal: 10,
    height: height - 50,
  },
  image: {
    width: width - 20,
  },
  cardTitle: {
    color: Colors.white,
    fontSize: Typography.primaryEMHeading,
    fontFamily: Typography.primaryFontFamilyBold,
  },
  dateTime: {
    color: Colors.lightWhite,
    fontSize: Typography.primarySHeading,
    fontFamily: Typography.primaryFontFamilySemiBold,
  },
  description: {
    color: Colors.lightWhite,
    fontSize: Typography.primarySHeading,
    fontFamily: Typography.primaryFontFamilyMedium,
  },
  readMore: {
    width: 140,
    marginLeft: -5,
    marginVertical: 10,
  },
});
