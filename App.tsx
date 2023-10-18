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
  constructor() {
    super();
    this.state = {
      name: "Anil"
    }
  }

  updateName(studentName) {
    this.setState({ name: studentName })
  }

  render() {
    return (
      <View>
        <Text> {this.state.name} </Text>
        <TextInput placeholder='Enter your name' onChangeText={(studentName) => this.updateName(studentName)} />
        <Button title='Press Me' />
        <Student name={this.state.name} />


      </View>
    )
  }


}


export default App;
