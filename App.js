import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

//Screens
import HomePage from './src/screens/Home';
import Searching from './src/screens/Searching';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  Search: {
    screen: Searching
  }
})


export default createAppContainer(AppNavigator);