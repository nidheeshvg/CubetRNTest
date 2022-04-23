/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import {LoginBg} from '../assets/images';
import {
  ButtonColor,
  FbBtnColor,
  fontBlack,
  fontMedium,
  LoginTextColor,
} from '../styles';
const OnboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ImageBackground style={{flex: 1}} source={LoginBg}></ImageBackground>
      <View style={{flex: 1}}>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={[
              fontMedium,
              {
                color: LoginTextColor,
                fontWeight: '500',
                fontSize: 32,
                alignSelf: 'center',
                textAlign: 'center',
              },
            ]}>
            Get the best{'\n'}coffee in town!
          </Text>
        </View>
        <View style={{flex: 0.6}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, padding: 14}}>
              <Pressable
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: ButtonColor,
                  borderRadius: 30,
                }}>
                <Text
                  style={[
                    fontBlack,
                    {
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      textAlign: 'center',
                    },
                  ]}>
                  Register
                </Text>
              </Pressable>
            </View>
            <View style={{flex: 1, padding: 14}}>
              <Pressable
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: ButtonColor,
                  borderRadius: 30,
                  borderWidth: 2,
                }}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text
                  style={[
                    fontBlack,
                    {
                      color: ButtonColor,
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      textAlign: 'center',
                    },
                  ]}>
                  Log In
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 1, padding: 14}}>
              <Pressable
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: FbBtnColor,
                  borderRadius: 30,
                  borderWidth: 2,
                }}>
                <Text
                  style={[
                    fontBlack,
                    {
                      color: FbBtnColor,
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                      textAlign: 'center',
                    },
                  ]}>
                  Connect with Facebook
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
