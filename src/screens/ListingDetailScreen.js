/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ButtonColor,
  DetailsContentStyle,
  DetailsScreenViewStyle,
  DetailsTitleStyle,
  fontBlack,
} from '../styles';
const {width, height} = Dimensions.get('window');
import {BackBtn, Go} from '../assets/icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const ListingDetailScreen = ({navigation, route}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(route);
    let dataToload = route.params.data;
    if (dataToload) {
      setData(dataToload);
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#8c5740" />
      <View
        style={[
          {
            flex: 0.1,
            backgroundColor: ButtonColor,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <Pressable
          style={{padding: 5, zIndex: 999, marginLeft: 20}}
          onPress={() => {
            console.warn('click');
            navigation.pop();
          }}>
          <Image
            source={BackBtn}
            style={{width: 10, height: 20, tintColor: 'white'}}
          />
        </Pressable>
        <View style={{flex: 0.8, justifyContent: 'center'}}>
          <Text
            style={[
              fontBlack,
              {
                color: 'white',
                fontWeight: '500',
                fontSize: 22,
                alignSelf: 'center',
                textAlign: 'center',
                position: 'absolute',
              },
            ]}>
            Details
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 0.9}}>
        {Object.keys(data).length != 0 ? (
          <View style={[DetailsScreenViewStyle]}>
            <Image
              style={{height: 300, width: '80%', marginTop: 40}}
              source={{uri: data.strDrinkThumb}}
            />
            <View style={{marginTop: 20, paddingHorizontal: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  color: ButtonColor,
                }}>
                {data.strDrink}
              </Text>
              <Text style={[DetailsTitleStyle]}>Drink type:</Text>
              <Text style={[DetailsContentStyle]}>{data.strAlcoholic}</Text>
              <Text style={[DetailsTitleStyle]}>Instructions:</Text>
              <Text style={[DetailsContentStyle]}>{data.strInstructions}</Text>
              <Text style={[DetailsTitleStyle]}>Glass type:</Text>
              <Text style={[DetailsContentStyle]}>{data.strGlass}</Text>
              <Text style={[DetailsTitleStyle]}>Ingredients</Text>
              {Object.keys(data).map((key, i) => {
                if (key.includes('strIngredient')) {
                  return <Text style={[DetailsContentStyle]}>{data[key]}</Text>;
                }
              })}
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListingDetailScreen;
