import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  let minute = Math.floor(time / 60);
  time -= minute * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minute < 10 ? `0${minute}` : minute}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const { isPlaying, addTimer } = this.props;
    const newIsPlaying = nextProps.isPlaying;
    if (!isPlaying && newIsPlaying) {
      let interval = setInterval(() => {
        addTimer();
      }, 1000);
      this.setState({
        interval
      });
    } else if (isPlaying && !newIsPlaying) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timeDuration,
      startTimer,
      restartTimer
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.timer}>
            {formatTime(timeDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying ? (
            <Button iconName="play-circle" onPress={startTimer} />
          ) : (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: { flex: 2, justifyContent: "center", alignItems: "center" },
  lower: { flex: 1, justifyContent: "center", alignItems: "center" },
  timer: { color: "#ffffff", fontSize: 120, fontWeight: "300" }
});

export default Timer;
