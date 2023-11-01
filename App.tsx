import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';


function App() {

const [hide,setHide] = useState(false);
const [barStyle,setBarStyle] = useState("default")


  return(
<SafeAreaView>
  <Text style={{fontSize : 20,flex: 1,justifyContent:'center'}}> Status Bar in React</Text>
  <StatusBar
  backgroundColor="orange"
  barStyle={barStyle}
  hidden={hide}
  />

  <Button title='Toggle Status Bar' onPress={() => setHide(!hide)}/>
  <Button title='Update Style for status Bar' onPress={() => setBarStyle("dark-content")}/>


</SafeAreaView>

  );
}


export default App;
