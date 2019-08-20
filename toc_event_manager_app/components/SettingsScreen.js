import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

class SettingsScreen extends React.Component {
  logOut = () => {
    /*
     Log out functionality
     -Sign user out from firebase
     -remove key from Async storage
     -navigate screen to Auth stack
     */
    try {
      firebase.auth().signOut();
      AsyncStorage.removeItem('TOKEN')
      console.log("Log out successful! ")
      this.props.navigation.navigate('Auth'); //send back to Auth stack
    } catch (err) {
      console.log("Error when logging out: ", err)
    }
  }
  
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings page</Text>
        <Button
          title="Log out"
          onPress={this.logOut} />
      </View>
    );
    
  }
}
export default SettingsScreen

