import React from 'react';
import {
FlatList,
Text,
View

} from 'react-native';


const users = [
  {
    id : 1,
    name : "Anil"
  },

  {
    id : 2,
    name : "Babloo"
  },

  {
    id : 3,
    name : "Chinmoy"
  },

  {
    id : 4,
    name : "Deepak"
  },

  {
    id : 5,
    name : "Santana"
  },
]


function App() {
  return(
<View>
  <FlatList
  data={users}
  renderItem={({item}) => <Text>{item.name} </Text>}
  />
</View>

  );
}


export default App;
