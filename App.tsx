/**
 * title
 */
import React, { ReactNode, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
}

interface State {
}

export default class App extends Component<State, Props> {

  constructor(props: Props) {
    super(props);
    this.state = {
    }
  }

  render(): ReactNode {
    return (
      <View>
        <Text>App</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
});
