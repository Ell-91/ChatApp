import { useState, useEffect } from "react"; //use {useEffect} when we want to query the data
import { View, FlatList } from "react-native";
import ContactListItem from "../components/ContactListItem";

//To query the users
import { API, AppOwnership, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";

const ContactsScreen = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        API.graphql(graphqlOperation(listUsers)).then((result)=> {
            console.log(result)
            setUsers(result.data?.listUsers?.items)

        })

    }, [])
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => <ContactListItem user={item}/> } 
                style={{backgroundColor: 'white'}}
            />
        </View>
    )
}

export default ContactsScreen