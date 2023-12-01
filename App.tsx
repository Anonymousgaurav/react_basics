import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';


function App() {

  const data = {
    "name": "priya",
    age: 25,
    email: "priya@gmail.com"
  }
  const saveAPIData = async () => {
    const url = "http://localhost:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    result = await result.json();
    console.warn(result);
  }


  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}> Post API Call</Text>
      <Button title='Save Data' onPress={saveAPIData}/>
    </SafeAreaView>

  );
}


export default App;
