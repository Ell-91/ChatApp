import { View, Text, FlatList } from "react-native";
import  chats from '../../assets/data/chats.json'
import ChatListItem from "../components/ChatListItem";

const ChatScreen = () => {
    return (
        <View>
            <FlatList
                data={chats}
                renderItem={({item}) => <ChatListItem chat={item}/> }
            />
        </View>
    )
}
export default ChatScreen
