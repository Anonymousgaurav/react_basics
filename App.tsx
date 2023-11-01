import React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  Text
} from 'react-native';


function App() {
  return(
<SafeAreaView>
  <Text style={{fontSize : 20}}>  How to Check Platform </Text>
  <Text style={{fontSize : 20}}>  Platform = {Platform.OS} </Text>

</SafeAreaView>

  );
}


export default App;
