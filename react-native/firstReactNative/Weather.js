import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비가 옵니다!!",
    subtitle: "우산을 챙겨서 나가세요!!",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "맑음 입니다.!",
    subtitle: "밖에 나가요!!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "천둥 번개가 쳐요 우르르 쾅쾅",
    subtitle: "집에 있어요 ㅠㅠ",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "흐려요",
    subtitle: "밖에 구름이 조금 있어요!",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈이 와요",
    subtitle: "하늘을 봐 하얗게 눈이 내려와",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "스물스물 비가 내려요",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "안개 안보여",
    subtitle: "앞이 안보이니 조심해서 다녀요",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "아름 다운 안개쓰 붐!",
    subtitle: "안개가 스물스물 잘보입니다.",
    icon: "weather-fog"
  }
};

const Weather = ({ temp, name, city }) => {
  console.log(temp, name, city);
  return (
    <LinearGradient colors={weatherCases[name].colors} style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.upper}>
        <MaterialCommunityIcons
          name={weatherCases[name].icon}
          size={144}
          color={"#fff"}
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.temp}>{city}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[name].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    marginTop: 30,
    fontSize: 38,
    color: "white"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 50,
    marginBottom: 150
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "300"
  },
  title: {
    fontSize: 43,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10
  }
});
