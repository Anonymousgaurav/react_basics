import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';

import Student from './components/Student';


class App extends Component {
  fruits = () => {
    console.warn("Apple")
  }

  render() {
    return (
      <View>
        <Text> Class Component </Text>
        <TextInput placeholder='Enter your name' />
        <Button title='Press Me' onPress={this.fruits} />
        <Student />


      </View>
    )
  }


}


export default App;
