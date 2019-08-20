import React from 'react';
import { Button, Input, Icon } from 'react-native-elements';
import { View, Alert, AsyncStorage, StyleSheet } from 'react-native';
import GenerateForm from 'react-native-form-builder';
import db from '../firebase/firebaseConfig';
import { red } from 'ansi-colors';
//import AppTabNavigator from './AppTabNavigator';
import firebase from 'firebase';


//SignIn screen of app


class SignInScreen extends React.Component {
  constructor() {
    super();
    this.unsubscriber = null
    this.state = {
      email: '',
      password: '',
    }
  }


   componentDidMount(){
     console.log("This is the state: ", this.state)
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      if(user){
        const token = user.email;
        AsyncStorage.setItem('TOKEN', token).catch(err => console.log("error storing emaial: ", err))
        this.props.navigation.navigate('Role')
      }else{
        console.log("user is signed out");
      }
    })
  }


  /*componentWillMount() {
    if (this.unsubscriber) {
      this.unsubscriber(); //stop listener
    }
  } */
  
  signInUser = async () => {
    
    try{
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(err => console.log("Incorrect password"))

    } catch(err){
      console.log("error signing in user")
    }
    //this.props.navigation.navigate('Main')

  }

 


  registerHandle = () => {
    this.props.navigation.navigate('Register')
  }
  render() {

    return (
      <View >
        <Input 
          inputContainerStyle={styles.container}
          placeholder="email"
          type="email"
          leftIcon={<Icon name="email"/>}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email} />
        <Input
          placeholder="Password"
          inputContainerStyle={styles.container}
          secureTextEntry={true}
          leftIcon={<Icon name="lock"/>}
          type="password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />
        <Button
          title="Sign In"
          onPress={this.signInUser} />

        <Button
          title="Register"
          onPress={this.registerHandle} />
      </View>
    );
  }
}

export default SignInScreen

const styles = StyleSheet.create({
  //container styling for input fields
  container: {
    borderRadius: 4,
    borderColor: '#3a66a0',
    borderWidth: 0.5,
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  }
})