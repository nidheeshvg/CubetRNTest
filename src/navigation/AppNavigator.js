/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens';
import SplashScreen from 'react-native-splash-screen';

const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <AppStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: false,
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
