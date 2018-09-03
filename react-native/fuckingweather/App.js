import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ActivityIndicator/>
        <Text>Hello I'm a React-native Developer!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
