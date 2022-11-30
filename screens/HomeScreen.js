import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Homescreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome to Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
