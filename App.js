import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { useEffect } from 'react';
import Navigator from './src/navigation';

import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'; //if something deals with interface it should come from aws-react native
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';


Amplify.configure({...awsconfig, Analytics: {disabled: true}});  //to disable analytics to get rid of error

function App() {
  useEffect(() => {
    const syncUser = async () => {
      //get Auth user
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true}) //this call will not use the cache and will actually do a query
      console.log(authUser) 

      //query the database using Auth user (SubID)
      const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub}))
      console.log(userData)
  
      if (userData.data.getUser) {
        console.log('User already exists in Database')
        return
      }
      //If there is no users in the database, create one/ otherwise do nothing
      const newUser = {
        id: authUser.attributes.sub,  //How we map an authentication user with a database user
        name: authUser.attributes.phone_number,
        status: 'Hey I am using chatApp'
      };
      //send to our API using graphql 
      console.log(newUser)
      const newUserResponse = await API.graphql(graphqlOperation(createUser, {input: newUser}))
    }
    syncUser()
  }, [])
  return (
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',


  },
});

export default withAuthenticator(App);