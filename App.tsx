import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';


function App() {
  return(
<SafeAreaView style = {styles.main}>
  <Text style = {{fontSize : 25, textAlign : 'center',marginTop: 15,marginBottom : 20}}> Buttons in React Native </Text>
  <TouchableHighlight> 
    <Text style = {styles.button}> Button </Text>
  </TouchableHighlight>


  <TouchableHighlight> 
    <Text style = {[styles.button, styles.success ]}> Success </Text>
  </TouchableHighlight>

  <TouchableHighlight> 
    <Text style = {[styles.button, styles.success, styles.primary]}> Primary </Text>
  </TouchableHighlight>


  <TouchableHighlight> 
    <Text style = {[styles.button, styles.success, styles.primary, styles.warning]}> Primary </Text>
  </TouchableHighlight>


  <TouchableHighlight> 
    <Text style = {[styles.button, styles.success, styles.primary, styles.warning, styles.error]}> Primary </Text>
  </TouchableHighlight>


</SafeAreaView>

  );
}

const styles = StyleSheet.create(
  {
      main : {
        flex : 1
      },

      button : {
        backgroundColor : 'grey',
        color : 'white',
        fontSize : 24,
        textAlign : 'center',
        margin: 10,
        padding : 10,
        borderRadius : 10,
        shadowColor : 'red',
        elevation : 10,
        shadowOpacity : 0.5
      },

      success : {
        backgroundColor : 'green',
      },
      primary : {
        backgroundColor : 'blue'
      },
      warning : {
        backgroundColor : 'red'
      },
      error : {
        backgroundColor : 'yellow'

      }


  }
)


export default App;
