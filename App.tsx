import React from 'react';
import {
  View,
StyleSheet

} from 'react-native';


function App() {
  return(
<View style= {styles.main} > 
<View style={ styles.box1 }>
<View style={ styles.InnerBox1 }></View>
<View style={ styles.InnerBox2 }></View>
<View style={ styles.InnerBox3 }></View>

</View>
<View style={ styles.box2}></View>
<View style={ styles.box3}></View>

</View>  

  );
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
    flexDirection: 'column'
  },
  box1 : {
    flex : 2,
    backgroundColor : 'red',
    flexDirection: 'row'
  },
  box2 : {
    flex : 1,
    backgroundColor : 'blue'

  },
  box3 : {
    flex : 1,
    backgroundColor : 'yellow'

  },
  InnerBox1 : {
    flex : 1,
    backgroundColor : 'skyblue',
    margin: 8
  },

  InnerBox2 : {
    flex : 1,
    backgroundColor : 'orange',
    margin: 8
  },

  InnerBox3 : {
    flex : 1,
    backgroundColor : 'lightgreen',
    margin: 8
  }
}
)


export default App;
