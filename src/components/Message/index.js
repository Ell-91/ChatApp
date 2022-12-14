import { View, Text, StyleSheet} from "react-native";
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime); //extend using the relative time

const Message = ({message}) => {
    const isMyMessage = () => {
        return message.user.id === 'u1';
    };
    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? '#DCF8C8' : 'white',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        }]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // alignSelf: 'flex-start',
        margin: 5,
        padding: 10,
        borderRadius: 45,
        // maxWidth: '90%'
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,

        elevation: 5,

    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end'
        
    }

})

export default Message
