import { useState } from 'react';
import { Text, Button, View, TextInput } from 'react-native';
export const Login = (props) => {
    const [userName,setName ] = useState("");
    const name = "Gaurav";
    const age = 28;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
            <Text style={{ fontSize: 20 }}> Login Screen </Text>
            <TextInput
            placeholder='Enter Name'
            style = {{fontSize : 25,borderWidth : 2,borderColor : '#000'}}
            onChangeText={(text) => setName(text)}
            />
            <Button title='Go To Home Screen' onPress={() => props.navigation.navigate("Home",
            {
                userName,
                age
            })}
            
            
            />
        </View>
    )
}