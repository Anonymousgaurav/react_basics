import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';


function App() {
  const [show, setShow] = useState(false);

  return (

    <SafeAreaView style={styles.container}>

      {
        show ? <View style={styles.modal}>
          <View style={styles.body}>
            <Text> Some Dummy Text </Text>
            <Button title='Close Dialog' onPress={() => setShow(false)} />
          </View>
        </View> : null
      }
      <Button title='Open Dialog' onPress={() => setShow(true)}/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: "#fff",
    width: 300,
    height: 300,
    justifyContent: "center",
    padding: 30,
    borderRadius: 10
  }
})


export default App;
