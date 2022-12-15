import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform} from "react-native";
import bg from '../../assets/images/stock.webp';
import Message from "../components/Message";
import messages from '../../assets/data/messages.json'
import InputBox from "../components/InputBox";

const ChatScreen = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ImageBackground source= {bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={( {item} ) =>  <Message message={item}/> } //for every item/message in our array we want to render a message component and send data about that message
                    style={styles.list}
                    inverted
                />
                <InputBox/>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    },
    container: {
        flex: 1
      },
});
export default ChatScreen
