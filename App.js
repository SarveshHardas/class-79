import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import ISSLocation from './screens/ISSLocation';
import Meteor from './screens/meteor';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Location" component={ISSLocation} />
          <Stack.Screen name="Meteor" component={Meteor} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
