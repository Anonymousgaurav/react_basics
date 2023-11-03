import { Text, View } from 'react-native';

export const Home = (props) => {
    console.warn(props.route.params)
    const {userName,age} = props.route.params

 

    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
            <Text style={{ fontSize: 20 }}> Home Screen </Text>
            <Text style={{ fontSize: 20 }}> Name : {userName} </Text>
            <Text style={{ fontSize: 20 }}> Age : {age} </Text>


        </View>
    )
}
