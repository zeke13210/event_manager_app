import React from 'react';
import { ActivityIndicator, View, AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._checkForToken();
    }

    _checkForToken = async () => {
        /*  
            Function still working on need to add below functionality
            1. Check for email token
            2. match email token to user or admin
            3. If user navigate to user login / if admin login navigate to admin login
    
        */
        try {
            const userToken = await AsyncStorage.getItem('TOKEN').catch(err => console.log("Error pulling token: ", err))
            this.props.navigation.navigate(userToken ? 'Main' : 'Login'); //Move to Main or Login stack if token exists

        } catch (err) {
            console.log("Error is pulling token: ", err)
        }

    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="0053d8" /*blue */ />
            </View>
        );
    }
}

export default AuthLoadingScreen