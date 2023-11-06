import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text
} from 'react-native';



function App() {

  const [data, setData] = useState<any>(null);

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let jsonResponse = await fetch(url);
    jsonResponse = await jsonResponse.json();
    setData(jsonResponse);
  }
  useEffect(() => {
    getApiData();
  }, [])

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}> Api Call </Text>
      {
      data ? <View>
        <Text> {data.id}</Text>
        <Text> {data.userId}</Text>
        <Text> {data.title}</Text>
        <Text> {data.body}</Text>


      </View> : null
}
    </SafeAreaView>
  )
};


export default App;
