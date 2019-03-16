import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'



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



class SettingsScreen extends Component {

  render() {
    return (

      <Container>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, }}>
          <Text style={styles.a}>Welcome</Text>
        </Content>

      </Container>

    )
  }

}

export default SettingsScreen;


