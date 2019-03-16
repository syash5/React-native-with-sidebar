/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { AppRegistry } from "react-native";
import HomeScreen from "./HomeScreen";
import { StackNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import SecondScreen from "./SecondScreen";


const SimpleApp = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  SecondScreen: { screen: SecondScreen},
},
  
  {
    initialRouteName : 'HomeScreen',
  }
  )


// AppRegistry.registerComponent("SimpleApp", () => SimpleApp);
export default createAppContainer(SimpleApp);