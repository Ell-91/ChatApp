import { useState } from 'react'
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const InputBox= () => {
    const [newMessage, setNewMessage] = useState(''); ///useSate gives us an array of two values, destructuring values and saving them intoour contants
    //first value: value ofour state    second value: setter function that we use to update the state, never update
    //directly, always update using the setter


    //attach this callback function to an onPress event 
    const onSend = () => {
        console.warn('Sending a new message ', newMessage) //console.warn when sending events to see if the events are actually triggered

        setNewMessage('') //reset the state variable
    }
    return (
        //Listen to the onChangeText event for TextInput and everytime text input is changed we update the state
        //Listening for an update and updating the state value 
        <View style={styles.container}>
            <FontAwesome name="plus" size={18} color="black" />
            <TextInput 
                value={newMessage} 
                onChangeText={setNewMessage} 
                style={styles.input} placeholder='type your message'
            />
            <MaterialCommunityIcons onPress={onSend} style={styles.send}name="send-outline" size={18} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'


    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        fontSize: 16

    },
    send: {
        borderRadius: 15,
        overflow: 'hidden'

    }

}
)

export default InputBox