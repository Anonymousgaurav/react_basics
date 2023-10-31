import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';


function App() {
  const [show,setShow] = useState(false);


  const displayLoader=()=> {
    setShow(true);
    setTimeout(() => {
      setShow(false)
    },5000)
  }


  return(
<SafeAreaView style={styles.main}>


{
  show ? <ActivityIndicator size={"large"} color={"green"}/> : null
}


  <ActivityIndicator size={50} color={"green"} animating={show}/>
  <Button title='Loader' onPress={displayLoader}></Button>
</SafeAreaView>

  );
}

const styles = StyleSheet.create(
  {
    main : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
    }
  }
)

export default App;
