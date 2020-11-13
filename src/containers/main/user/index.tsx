/**
 * title
 */
import React, { ReactNode, Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

interface IProps {
}

interface IState {
}

@connect((state: { local: { user: any; }; }) => ({
  user: state.local.user,
}))
export default class index extends Component <IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
    }
  }

  render(): ReactNode {
    return (
      <SafeAreaView>
        <Text>User</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
});
