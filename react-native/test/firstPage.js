import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class firstPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "grey",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text> firstPage </Text>
        <Button
          title="first"
          onPress={() => {
            navigation.navigate("second", { hi: "난 첫페이지에서 왔어 " });
          }}
          color="#fff"
        />
      </View>
    );
  }
}
