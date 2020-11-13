import React, { ReactNode, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainPage from './main'

interface IProps {
}

interface IState {
}

const { Navigator, Screen } = createStackNavigator();

export default class index extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
    }
  }

  render(): ReactNode {
    return (
      <Navigator
        initialRouteName={'Main'}
        mode="card"
        headerMode={'screen'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen
          name="Main"
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          component={MainPage}
        />
      </Navigator>
    )
  }
}

const styles = StyleSheet.create({
});
