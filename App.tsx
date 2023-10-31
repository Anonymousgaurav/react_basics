import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  Modal,
  StyleSheet,
  View
} from 'react-native';


function App() {
  const [showModal,setShowModal] = useState(false);
  return(
<View style={styles.main}>
  <Modal
  transparent = {true}
  visible={showModal}
  animationType='fade'
  >
    <View style={styles.centerView}>
      <View style = {styles.modalView}>
        <Text style={styles.modalText}> Hello Code By Gaurav Swarankar</Text>
        <Button title='Close Modal' onPress={() => setShowModal(false)}></Button>


      </View>

    </View>
    
  </Modal>
<View style={styles.buttonView}> 

<Button title='Open Modal' onPress={() => setShowModal(true)}/>


</View>
</View>

  );
}

const styles = StyleSheet.create(
  {
    main : {

    flex : 1
    },
    buttonView : {
      flex : 1,
      justifyContent : 'flex-end'
    },
    centerView : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'

    },
    modalView : {
      backgroundColor : 'white',
      padding : 35,
      borderRadius : 20,
      shadowColor : 'black',
      elevation : 8

    },
    modalText: {
      fontSize : 20,
      marginBottom : 20
    }
  }
)


export default App;
