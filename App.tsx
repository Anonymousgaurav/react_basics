import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='SignUp' component={SignUp} />


      </Tab.Navigator>

    </NavigationContainer>
  )
};

const Login = () => {
  return <View style= {{flex:1,justifyContent: 'center',alignItems: 'center'}}>
    <Text> Login </Text>
  </View>
}


const SignUp = () => {
  return <View style= {{flex:1,justifyContent: 'center',alignItems: 'center'}}>
    <Text> Signup </Text>
  </View>
}



export default App;
