import { View, FlatList } from "react-native";
import  chats from '../../../assets/data/chats.json'
import ChatListItem from "../../components/ChatListItem";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listChatRooms } from "../../graphql/queries"; //only want to query chatrooms where we are the user, we get everything with this query 
import { useEffect } from "react";
 
const ChatsScreen = () => {
    useEffect(() => {
        const fetchChatRooms = async () => {
            const authUser = await Auth.currentAuthenticatedUser();

            const response = await API.graphql(listChatRooms, { id: authUser.attributes.sub })
            console.log(response)

        };
        fetchChatRooms();
    })
    return (
        <View>
            <FlatList
                data={chats}
                renderItem={({item}) => <ChatListItem chat={item}/> } 
                style={{backgroundColor: 'white'}}
            />
        </View>
    )
}
export default ChatsScreen
