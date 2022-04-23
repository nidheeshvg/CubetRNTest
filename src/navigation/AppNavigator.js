/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ListingDetailScreen,
  ListingScreen,
  LoginScreen,
  OnboardScreen,
} from '../screens';
import SplashScreen from 'react-native-splash-screen';
import {useAppSelector} from '../store/hooks';
import {getLoginStatus} from '../store/slices/appSlice';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const loggedIn = useAppSelector(getLoginStatus);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  useEffect(() => {
    console.warn('loggedIn', loggedIn);
  }, [loggedIn]);

  return (
    <AppStack.Navigator
      initialRouteName="Onboard"
      screenOptions={{
        gestureEnabled: false,
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      {loggedIn == true ? (
        <>
          <AppStack.Screen name="ListingScreen" component={ListingScreen} />
          <AppStack.Screen
            name="ListingDetailScreen"
            component={ListingDetailScreen}
          />
        </>
      ) : (
        <>
          <AppStack.Screen name="Onboard" component={OnboardScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
