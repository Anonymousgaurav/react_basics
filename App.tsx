import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
StyleSheet,

} from 'react-native';




const users = [
  {
    id : 1,
    name : 'Sourav'
  },
  {
    id : 2,
    name : 'Gaurav'
  },{
    id : 3,
    name : 'Vishal'
  },{
    id : 4,
    name : 'Chandan'
  },{
    id : 5,
    name : 'Vivek'
  },
  
]


function App() {
  return(
 <View style = {{ flex : 1,
              flexDirection : 'row',
              flexWrap : 'wrap'
}}>

{

users.map((item) => <Text style={styles.item}> {item.name}</Text>)
}
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
