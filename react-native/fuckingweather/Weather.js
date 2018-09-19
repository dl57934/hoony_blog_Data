import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining Like a MF",
    subtitle: "For more info look outside",
    icon: "weather-raniy"
  },
  Clear: {
    colors: ["#FEF353", "#FF7300"],
    title: "Sunny as fuck",
    subtitle: "GO get your ass burnt",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know fucking boring",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "보슬비가 내려요...",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Don't know what that is ",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
    icon: "weather-fog"
  }
};

function Weather({ cityName, name, temp }) {
  console.log("asdasd", name);
  return (
    <LinearGradient colors={weatherCases[name].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[name].icon}
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.cityName}>{cityName} City</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[name].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

export default Weather;
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  },
  cityName: {
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white"
  }
});
