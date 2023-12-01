import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList
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
      <Text style={{ fontSize: 20 }}> Api Call In Flat List View </Text>
      {
        data.length ?
        <FlatList
        data={data}
        renderItem={({item}) =>
         <View style={{borderBottomColor:"orange",borderBottomWidth: 1,padding:10}}>
                    <Text style={{ fontSize: 20,marginBottom: 10 }}> {item.id} </Text>
                    <Text style={{ fontSize: 18,marginBottom:5 }}> {item.title} </Text>
                    <Text style={{ fontSize: 16 }}> {item.body} </Text>


        </View>
       }
        />
          : null
      }
    </ScrollView>
  )
};


export default App;
