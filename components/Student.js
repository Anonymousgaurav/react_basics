import React, { Component } from 'react';


import {
  Text,
  View
} from 'react-native';





class StudentComponent extends Component {
  render() {
    return (
      <View>
        <Text> Student Name : {this.props.name} </Text>

      </View>
    )
  }


}

export default StudentComponent;
