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
  FlatList,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ButtonColor,
  fontBlack,
  fontMedium,
  ListItemStyle,
  LoginTextColor,
} from '../styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {BackBtn, Go} from '../assets/icons';
import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';

const ListingScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchList();
  }, []);
  const FetchList = async () => {
    try {
      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee',
      );
      console.log(response.data.drinks);
      setData(response.data.drinks);
    } catch (error) {
      SimpleToast.show(error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#8c5740'} />
      <View
        style={[
          {
            flex: 0.1,
            backgroundColor: ButtonColor,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          },
        ]}>
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
              width: '80%',
              left: '13%',
            },
          ]}>
          Listing
        </Text>
      </View>
      <View style={{flex: 0.9}}>
        <FlatList
          data={data}
          keyExtractor={obj => obj.idDrink}
          renderItem={({item}) => {
            return (
              <Pressable
                style={[ListItemStyle]}
                onPress={() => {
                  navigation.navigate('ListingDetailScreen', {data: item});
                }}>
                <Image
                  source={{uri: item.strDrinkThumb}}
                  style={{height: 80, width: 80, borderRadius: 8}}
                />
                <View
                  style={{
                    paddingLeft: 10,
                    marginRight: 20,
                    width: width - 30 - 80 - 20,
                  }}>
                  <Text
                    style={[fontMedium, {color: ButtonColor, fontSize: 18}]}>
                    {item.strDrink}
                  </Text>
                  <Text>{item.strAlcoholic}</Text>
                </View>
                <View style={{width: 20, justifyContent: 'center'}}>
                  <Image
                    source={Go}
                    style={{
                      height: 30,
                      width: 10,
                      borderRadius: 8,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListingScreen;
