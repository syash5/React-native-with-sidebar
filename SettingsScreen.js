/* import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native"
import { Icon,Button,Container,Header,Content,Left } from 'native-base'

class SettingsScreen extends class name extends Component{
    render(){
        return(
            <Container>
            <content contentContainerStyle= {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
              }}>
            <text> Settings Screen</text>
              </content>
            </Container>

        );
    }
}
export default SettingsScreen;
 */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

class SettingsScreen extends Component {

  render() {
    return (

      <Container>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text style={{ color: 'white' }}>Go To Home Screen</Text>
        </Content>

      </Container>

    )
  }

}

export default SettingsScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
