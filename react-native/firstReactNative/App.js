import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./Weather";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = async (lat, lon) => {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=a6c578487d31e2eb09e372b7fe494ad3`;
    const response = await axios.get(API_URL);
    const {
      data: {
        main: { temp },
        weather,
        name
      }
    } = response;
    this.setState({
      temp: temp,
      name: weather[0].main,
      isLoaded: true,
      city: name
    });
  };

  render() {
    let { isLoaded, error, temp, name, city } = this.state;
    console.log(error, temp, name);
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather temp={Math.floor(temp - 273.15)} name={name} city={city} />
        ) : (
          <View style={styles.isLoading}>
            <Text style={styles.loadingText}>
              상훈이의 {"\n"} 죽여주는 날씨 앱
            </Text>
            {error ? <Text style={styles.isError}> {error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  isError: {
    color: "red",
    marginBottom: 40
  },
  isLoading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingBottom: 160,
    alignItems: "flex-start",
    paddingLeft: 30
  },
  loadingText: {
    fontSize: 38
  }
});
