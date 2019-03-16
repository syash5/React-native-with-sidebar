/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import { createStackNavigator, createAppContainer } from 'react-navigation';

//custom files 
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";





type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World</Text>
      </View>
    );
  }
}

// const MyApp = DrawerNavigator({

//   // For each screen that you can navigate to, create a new entry like this:
//   Home: {
//     screen: HomeScreen,
//   },
//   Settings: {
//     screen: SettingsScreen
//   }
// });
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Settings: { screen: SettingsScreen},
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})