import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='SignUp' component={SignUp} />
        <Tab.Screen name='Member' component={Member} />
      </Tab.Navigator>

    </NavigationContainer>
  )
};

const Login = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> Login </Text>
  </View>
}


const SignUp = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> Signup </Text>
  </View>
}

const Member = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> Premium Member </Text>
  </View>
}



export default App;