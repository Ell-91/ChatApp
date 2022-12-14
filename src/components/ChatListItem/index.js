import {Text, View, Image} from 'react-native'
import { StyleSheet } from 'react-native'


//Functional component
const ChatListItem = ({chat}) => {

    return (
        //main contaier has two children (Image, Content)
        <View style={styles.container}> 
            <Image 
                source={{uri: chat.user.image}} 
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
                </View>
                    <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
                <View>

                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray'

    }, 
    image: {
        width: 60,
        height: 60,
        borderRadius: 22,
        marginRight: 10

        
    },
    content: {
        flex: 1

    },
    row: {
        flexDirection: 'row',


    },
    name: {
        fontWeight: 'bold',
        flex: 1
    }, 
    subTitle: {
        color: 'gray'
    }

})

export default ChatListItem