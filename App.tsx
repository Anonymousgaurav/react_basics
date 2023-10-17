import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

import UserData from './components/UserData';

const users = [
  {
    id: 1,
    name: 'Sourav'
  },
  {
    id: 2,
    name: 'Gaurav'
  }, {
    id: 3,
    name: 'Vishal'
  }, {
    id: 4,
    name: 'Chandan'
  }, {
    id: 5,
    name: 'Vivek'
  },

]


function App() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 27 }}>  Components in Loop with FlatList </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item ={item} />
        }
      />
    </SafeAreaView>

  );
}



export default App;
