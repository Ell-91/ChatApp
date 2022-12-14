import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen";
import ChatsScreen from "../screens/ChatsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator(); //call the func to create the stack navigator 

const Navigator = () => {
    //start with a stack navigator that will contain our screens 
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}, {headerTitleAlign: 'center'}}>
                <Stack.Screen name='Home' component={MainTabNavigator} options={{headerShown: false }} />
                <Stack.Screen name='Chats' component={ChatsScreen} /> 
                <Stack.Screen name='Chat' component={ChatScreen} /> 
                <Stack.Screen name='Contacts' component={ContactsScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator 