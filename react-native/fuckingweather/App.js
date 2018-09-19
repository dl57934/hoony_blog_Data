import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY = "a6c578487d31e2eb09e372b7fe494ad3";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    cityName: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.getWheather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  getWheather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          cityName: json.name,
          isLoaded: true
        });
      });
  };
  render() {
    const { isLoaded, error, temperature, name, cityName } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather
            temp={Math.ceil(temperature - 273.15)}
            name={name}
            cityName={cityName}
          />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error ? <Text style={styles.erorrText}>{error}</Text> : null}
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
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  erorrText: {
    color: "red",
    backgroundColor: "transparent"
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
