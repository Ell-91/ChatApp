import {Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime); //extend using the relative time

//Functional component
const ContactListItem = ({ user }) => {
    const navigation = useNavigation();

    return (
        //main contaier has two children (Image, Content)
        <Pressable 
            onPress={() => {}} 
            style={styles.container}> 
            <Image 
                source={{uri: user.image}} 
                style={styles.image}
            />
            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
                <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',
        alignItems: 'center'

    }, 
    image: {
        width: 60,
        height: 60,
        borderRadius: 22,
        marginRight: 10

        
    },
    name: {
        fontWeight: 'bold',
        flex: 1
    }, 
    content:{
        flex: 1

    },
    subTitle:{
        color: 'gray'
    }

})

export default ContactListItem