import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class secondPage extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam("hi"));
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "grey",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text> secondPage </Text>
        <Button
          title="second"
          onPress={() => {
            navigation.goBack();
          }}
          color="white"
        />
      </View>
    );
  }
}
