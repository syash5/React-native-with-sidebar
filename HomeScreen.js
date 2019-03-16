
import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { StackNavigator } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  a: {
    fontSize: 50,
    textAlign: "center",
    margin: 15
  },

});

const HomeScreen = props => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Text style={styles.a}>
        Hello World
      </Text>
      <Button
        onPress={() => navigate("SecondScreen")}
        title="Go to Next Screen"
      />
    </View>
  );
};

export default HomeScreen;