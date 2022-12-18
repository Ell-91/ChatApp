import { View, FlatList } from "react-native";
import chats from '../../assets/data/chats.json'
import ContactListItem from "../components/ContactListItem";

const ContactsScreen = () => {
    return (
        <View>
            <FlatList
                data={chats}
                renderItem={({item}) => <ContactListItem user={item.user}/> } 
                style={{backgroundColor: 'white'}}
            />
        </View>
    )
}

export default ContactsScreen