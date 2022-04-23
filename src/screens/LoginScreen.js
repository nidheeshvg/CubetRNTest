/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

import {BackBtn} from '../assets/icons';
import {
  ButtonColor,
  FbBtnColor,
  fontBlack,
  fontMedium,
  LoginTextColor,
} from '../styles';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {setUserLoggedIn} from '../store/slices/appSlice';
const StaticUserName = 'TestUser@gmail.com';
const StaticPassword = 'Test@123';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [password, setPassword] = useState('');
  const passwordinputRef = useRef(null);
  const dispatch = useDispatch();
  const validateEmail = email => {
    const emailPattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailPattern.test(email);
  };
  const LoginClicked = () => {
    if (!email.trim() || validateEmail(email) == false) {
      setEmailError('Please enter a valid email');
      return;
    }
    if (!password.trim()) {
      setPassError('Please enter a password');
      return;
    }
    if (email != StaticUserName || password != StaticPassword) {
      Toast.show('Invalid Credentials');
      return;
    } else {
      dispatch(setUserLoggedIn(true));
      Toast.show('Login Success');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          flex: 0.1,

          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <Pressable
          style={{padding: 5, zIndex: 999}}
          onPress={() => {
            console.warn('click');
            navigation.pop();
          }}>
          <Image source={BackBtn} style={{width: 10, height: 20}} />
        </Pressable>
        <Text
          style={[
            fontBlack,
            {
              color: LoginTextColor,
              fontWeight: '500',
              fontSize: 22,
              alignSelf: 'center',
              textAlign: 'center',
              position: 'absolute',
              width: '80%',
              left: '13%',
            },
          ]}>
          Login
        </Text>
      </View>
      <View style={{flex: 0.9, paddingHorizontal: 20}}>
        <Text
          style={[
            fontMedium,
            {
              color: LoginTextColor,
              fontWeight: '500',
              fontSize: 32,
              marginTop: 20,
            },
          ]}>
          Welcome back!
        </Text>
        <View
          style={{
            padding: 1,
            marginTop: 20,
          }}>
          <FilledTextField
            error={emailError != '' ? emailError : null}
            value={email}
            tintColor={ButtonColor}
            label="Email"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordinputRef.current.focus();
              let validEmail = validateEmail(email);
              validEmail == true
                ? setEmailError('')
                : setEmailError('Please enter valid email');
            }}
            onChangeText={text => {
              setEmailError('');
              setEmail(text.trim());
            }}
            keyboardType="email-address"
            inputContainerStyle={{
              backgroundColor: 'white',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            padding: 1,
            marginTop: 20,
          }}>
          <FilledTextField
            error={passError != '' ? passError : null}
            ref={passwordinputRef}
            value={password}
            tintColor={ButtonColor}
            secureTextEntry={true}
            label="Password"
            keyboardType="visible-password"
            inputContainerStyle={{
              backgroundColor: 'white',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
            onChangeText={text => {
              setPassError('');
              setPassword(text.trim());
            }}
          />
        </View>
        <Pressable
          style={{height: 30, alignSelf: 'flex-end', justifyContent: 'center'}}>
          <Text
            style={[
              fontBlack,
              {
                color: ButtonColor,
                fontWeight: '500',
                fontSize: 15,
                alignSelf: 'center',
                textAlign: 'center',
              },
            ]}>
            Forgot Password?
          </Text>
        </Pressable>
        <View
          style={{
            height: 90,
            padding: 15,
            paddingHorizontal: 4,
            marginTop: 10,
          }}>
          <Pressable
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: ButtonColor,
              borderRadius: 30,
            }}
            onPress={() => {
              LoginClicked();
            }}>
            <Text
              style={[
                fontBlack,
                {
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 18,
                  alignSelf: 'center',
                  textAlign: 'center',
                },
              ]}>
              Log in
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={{height: 30, alignSelf: 'center', justifyContent: 'center'}}>
          <Text
            style={[
              fontBlack,
              {
                color: ButtonColor,
                fontWeight: '500',
                fontSize: 15,
                alignSelf: 'center',
                textAlign: 'center',
              },
            ]}>
            <Text style={{color: 'gray'}}>Don't have an account? </Text>
            Register
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
