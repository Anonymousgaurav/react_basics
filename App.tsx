import React from 'react';
import {
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './components/Login';
import { Home } from './components/Home';

const Stack = createNativeStackNavigator();
function App() {
  const headerAction = () => {
    console.warn("Button Presses")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "User Login",
          headerStyle: {
            backgroundColor: "orange"
          },
          headerTintColor: "sky-blue",
          headerTitleStyle: {
            fontSize: 25
          }
        }}
      >
        <Stack.Screen name='Login' component={Login}
          options={{

            headerTitle: () => <Button title='Left' onPress={() => { headerAction }} />,
            headerRight: () => <Header />,

            title: "User Login",
            headerStyle: {
              backgroundColor: "orange"
            },
            headerTintColor: "sky-blue",
            headerTitleStyle: {
              fontSize: 25
            }
          }}
        />
        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}





const Header = () => {
  return (
    <Button title='Header Button Title' />
  )
}


export default App;
