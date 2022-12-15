import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const InputBox= () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="plus" size={18} color="black" />
            <TextInput style={styles.input} placeholder='type your message'/>
            <MaterialCommunityIcons style={styles.send}name="send-outline" size={18} color="black" />
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