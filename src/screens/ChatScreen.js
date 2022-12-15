import { View, Text, ImageBackground, StyleSheet, FlatList} from "react-native";
import bg from '../../assets/images/stock.webp';
import Message from "../components/Message";
import messages from '../../assets/data/messages.json'

const ChatScreen = () => {
    return (
        <ImageBackground source= {bg} style={styles.bg}>
            <FlatList
                data={messages}
                renderItem={( {item} ) =>  <Message message={item}/> } //for every item/message in our array we want to render a message component and send data about that message
                style={styles.list}
                inverted
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    }
});
export default ChatScreen
