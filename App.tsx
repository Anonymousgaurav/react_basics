import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';


function App() {
  return(
<SafeAreaView style={styles.main}>
  <Pressable
 onPress={ () => (console.warn("Normal Press"))}
 onLongPress={ () => (console.warn("Long Press"))}
 onPressIn={ () => (console.warn("Press In"))}
 onPressOut={ () => (console.warn("Press Out"))}
  >
  <Text style={styles.pressableBtn}> Pressable in React </Text>
  </Pressable>
</SafeAreaView>

  );
}


const styles = StyleSheet.create({
  pressableBtn : {
    backgroundColor : "blue",
    color : "#fff",
    padding : 10,
    margin : 10,
    fontSize : 24,
    textAlign : "center",
    shadowColor : "#000",
    elevation : 8.0

  },
  main : {
    flex : 1,
    justifyContent : 'center'
  }
})


export default App;
