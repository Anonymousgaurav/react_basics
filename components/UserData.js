
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';


export default  UserData = (props) => {
    const item = props.item;
    return(
      <View style={styles.box}>
      <Text style={styles.item}> {item.id}</Text>
      <Text style={styles.item}> {item.name}</Text>
  
    </View>
    );
  }
  
  
  
  const styles = StyleSheet.create(
    {
      item: {
        fontSize: 24,
        flex: 1,
        color: 'orange',
        margin: 2,
        textAlign: 'center'
      },
  
      box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 10,
        fontSize: 25,
      }
  
    }
  )