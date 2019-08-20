import React from 'react';
import { ActivityIndicator, View, AsyncStorage, Alert } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import db from '../firebase/firebaseConfig';

class RoleAuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._checkRole();
        state = {
            role: '',
            active: null
        }
    }

    _checkRole = async () => {
        /*  
            Function still working on need to add below functionality
            1. Check for email token
            2. match email token to user or admin
            3. If user navigate to user login / if admin login navigate to admin login
    
        */
        try {
            const userToken = await AsyncStorage.getItem('TOKEN').catch(err => console.log("Error pulling token: ", err))
            console.log("User token val: ", userToken)
            const user = await db.collection('users').doc(userToken).onSnapshot(doc => {
                //console.log("User doc: ", doc.data())
                const userProfile = doc.data();
                this.setState({ role: userProfile.role })
                this.setState({ active: userProfile.active })
                console.log("the current state: ", this.state)
                if (this.state.role === 'user' && this.state.active) {
                    console.log("Logged in as user");
                    this.props.navigation.navigate('User');
                }else if (this.state.active === false){
                    Alert.alert('Not Active', 'Please wait until an admin approves your account');
                    this.props.navigation.navigate('Login')
                }else if (this.state.role === 'admin'){
                    console.log("logged in as admin");
                    this.props.navigation.navigate('Admin');
                }
            })
            
            //console.log("The user role is ", user);
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

export default RoleAuthLoadingScreen