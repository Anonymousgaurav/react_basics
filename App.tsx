import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';



function App() {

  const [data, setData] = useState<any>([]);

  const getListApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    let jsonResponse = await fetch(url);
    jsonResponse = await jsonResponse.json();
    setData(jsonResponse);
  }
  useEffect(() => {
    getListApiData();
  }, [])

  return (
    <ScrollView>
      <Text style={{ fontSize: 20 }}> Api Call In List View </Text>
      {
        data.length ? data.map((item: any) => <View style={{ padding: 10, borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 20, backgroundColor: "#ddd", padding: 10 }}> Id : {item.id} </Text>
          <Text style={{ fontSize: 20, padding: 10 }}> Title : {item.title} </Text>
          <Text style={{ fontSize: 20 }}> Body : {item.body} </Text>

        </View>
        )
          : null
      }
    </ScrollView>
  )
};


export default App;
