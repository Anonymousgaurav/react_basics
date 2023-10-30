import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';


function App() {

const [selectedRadio,setSelectedRadio] = useState(1);


  return (
    <SafeAreaView style={styles.main}>
      <Text style={{ fontSize: 20 }}> Radio Buttons in React Native</Text>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
           {
            selectedRadio == 1 ?   <View style={styles.radioBg}>

            </View> : null
           }
          </View>
          <Text style={styles.radioText}>  Radio 1 </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio} >
          {
            selectedRadio == 2 ?   <View style={styles.radioBg}>

            </View> : null
           }

          </View>
          <Text style={styles.radioText}>  Radio 2 </Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create(
  {
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    },
    radioText: {
      fontSize: 20,
      color: 'black'


    },
    radio: {
      height: 40,
      width: 40,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 20,
      margin: 10,
    },
    radioWrapper: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    radioBg: {
      backgroundColor: 'black',
      height: 28,
      width: 28,
      borderRadius: 20,
      margin: 4
    }
  }
)


export default App;
