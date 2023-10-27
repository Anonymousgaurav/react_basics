import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';


const App = () => {
  const [show, setShow] = useState(true)
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}> useEffect for UnMount Compoent</Text>

      <Button title='Toggle' onPress={() => setShow(!show)} />


      {
        show ? <Student /> : null
      }

    </SafeAreaView>

  );
}


const Student = () => {



 let timer =  setInterval(() => {
    console.warn("Timer called !!!!")
  }, 2000)

  /// useEffect will call when component will unmount from the UI
  useEffect(() => {
    return () => clearInterval(timer)
  })


  return (
    <SafeAreaView>
      <Text> Student </Text>
    </SafeAreaView>
  )

}

export default App;
