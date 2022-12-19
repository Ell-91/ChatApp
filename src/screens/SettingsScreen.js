import { View, Button, StyleSheet } from "react-native";
import React from 'react-native';
import { Auth } from 'aws-amplify'

const SettingsScreen = () => {
    return (
        <View style={styles.buttonStyle}>
            <Button onPress={() => Auth.signOut() } title='Sign out'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})

export default SettingsScreen