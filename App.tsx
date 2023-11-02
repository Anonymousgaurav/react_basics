import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      title: "User Login",
      headerStyle : {
        backgroundColor : "orange"
      },
      headerTintColor : "sky-blue",
      headerTitleStyle :{
        fontSize : 25
      }
    }}>
    <Stack.Screen name='Login' component={Login} 
    
    
    />
      <Stack.Screen name='Home' component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

const Home = () => {
  return (
    <View style={{flex : 1,justifyContent : "center",alignContent:"center"}}>
      <Text style={{ fontSize: 20 }}> Home Screen </Text>
    </View>
  )
}


const Login = (props) => {
  return (
    <View style={{flex : 1,justifyContent : "center",alignContent:"center"}}>
      <Text style={{ fontSize: 20 }}> Login Screen </Text>
      <Button title='Go To Home Screen' onPress={() => props.navigation.navigate("Home")}/>
    </View>
  )
}


export default App;
