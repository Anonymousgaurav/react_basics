import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';


const App = () => {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);

useEffect(()=> {
  console.warn(count)
},[count])


  return(
<SafeAreaView>
  <Text style={{fontSize : 20}}> useEffect as componentDidUpdate {count}</Text>
  <Text style={{fontSize : 20}}> useEffect as componentDidUpdate {data}</Text>

  <Button title='update Counter' onPress={() => setCount(count+1)}/>
  <Button title='data Counter' onPress={() => setData(data+1)}/>

</SafeAreaView>

  );
}


export default App;
