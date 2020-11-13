/**
 * title
 */
import React, { ReactNode, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './configureStore';
import AppNavigator from './containers';

interface IProps {
}

interface IState {
}

export default class App extends Component<IState, IProps> {

  constructor(props: IProps) {
    super(props);
    this.state = {
    }
  }

  render(): ReactNode {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
