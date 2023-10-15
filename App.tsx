import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
StyleSheet,

} from 'react-native';


function App() {
  return(
 <View style = {{ flex : 1,
              flexDirection : 'row',
              flexWrap : 'wrap'
}}>



<Text  style={styles.item}> Sourav </Text>
<Text  style={styles.item}> Gaurav </Text>
<Text  style={styles.item}> Vishal </Text>
  </View>
  )
}




const styles  = StyleSheet.create(
  {
    item : {
      fontSize : 25,
      backgroundColor : 'blue',
      color : '#FFF',
      margin : 5,
      padding : 5,
      width : 120,
      height : 120,
      textAlignVertical : 'center',
      textAlign : 'center'
    }
    
  }
)



export default App;
