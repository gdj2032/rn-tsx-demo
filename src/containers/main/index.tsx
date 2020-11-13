import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './home';
import UserPage from './user';

const { Navigator, Screen } = createBottomTabNavigator()

interface IProps {}

export default class Main extends Component <IProps> {

  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Navigator
        initialRouteName="Home"
        tabBarOptions={{
          // inactiveTintColor: themes.color.textColor2,
          // activeTintColor: themes.color.activeBlueColor,
        }}
      >
        <Screen name="Home"
          component={HomePage}
          options={() => {
            return {
              title: 'home',
            }
          }}
        />
        <Screen name="User"
          component={UserPage}
          options={() => {
            return {
              title: 'user',
            }
          }}
        />
      </Navigator>
    )
  }
}

const styles = StyleSheet.create({
});
