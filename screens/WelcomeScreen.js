import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Welcomescreen() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1611745843519-2e03872876cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.header}>Explore Luxembourg City</Text>
        <Text style={styles.text}>
          {" "}
          Discover the Culture and Attractions of the city through interesting
          routes and more...{" "}
        </Text>
        <View
          style={{ flexDirection: "row", paddingLeft: 40, paddingRight: 40 }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              {" "}
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 3,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 16,
  },
  text: {
    fontSize: 12,
    widht: 300,
    alignSelf: "center",
    textAlign: "center",
    padding: 16,
    color: "grey",
  },
  button: {
    padding: 16,
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
});
