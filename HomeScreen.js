import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

class HomeScreen extends Component {

  render() {
    return (

      <Container>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});