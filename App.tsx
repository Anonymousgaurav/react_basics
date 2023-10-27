import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';

const App = () => {
  const[count,setCount] = useState(0);


useEffect(() => {
  console.warn("Hello")
},[])


return(
  <SafeAreaView>
    <Text> Life Cycle with use effect {count} </Text>
    <Button title='Update' onPress={()=> setCount(count+1)}/>
  </SafeAreaView>
)

}


export default App;
