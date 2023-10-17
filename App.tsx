import React from 'react';
import {
  Button,
  SafeAreaView,
  SectionList,
  Text
} from 'react-native';


const users = [
  {
    id: 1,
    name: "Anil",
    data: ["Python", "Java", "PHP"]
  },

  {
    id: 2,
    name: "Babloo",
    data: ["Ruby", "Android", "Xamrin"]

  },

  {
    id: 3,
    name: "Chandan",
    data: ["Go", "Ruby", "Kotlin"]

  },

  {
    id: 4,
    name: "Deepak",
    data: ["MVVM", "MVP", "MVC"]

  },
]


function App() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}> My Name is Gaurav Swarankar</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => <Text> {item} </Text>
        }
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{fontSize : 25, color: 'red'}}> {name} </Text>
        )}
      />
    </SafeAreaView>

  );
}


export default App;
