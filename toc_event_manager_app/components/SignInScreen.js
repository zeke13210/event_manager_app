import React from 'react';
import { Button, Input, Icon } from 'react-native-elements';
import { View, Alert, AsyncStorage, StyleSheet } from 'react-native';
import GenerateForm from 'react-native-form-builder';
import db from '../firebase/firebaseConfig';
import { red } from 'ansi-colors';
//import AppTabNavigator from './AppTabNavigator';

const fields = [
  {
    type: 'email',
    name: 'email',
    required: true,
    icon: 'ios-mail',
    label: 'email',
  },
  {
    type: 'password',
    name: 'password',
    icon: 'ios-create',
    label: 'password',
  }
];

//SignIn screen of app


class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    console.log("This is the db connection: ", db)

  }



  /*componentWillMount() {
    if (this.unsubscriber) {
      this.unsubscriber(); //stop listener
    }
  } */
  fieldCheck = () => {
    console.log("function works")
  }
  signInUser = () => {
    console.log("This is the state: ", this.state)
    //this.props.navigation.navigate('Main')

  }

  validateForm = (fields) => {
    /* Need to add complete error handling and figure out how to 
    use this function to enable and disable button */
    let error = false;
    let errorMsg = '';

    switch (fields.name) {

      case 'email':
        this.setState({ email: fields.value }) //map state to email
        if (!(fields.value && fields.value.trim())) {
          //checks if email has value with no whitespace
          error = true;
          errorMsg = 'Email required';
        }
        break;
      case 'password':
        this.setState({ password: fields.value })
        break;
    }

    return { error, errorMsg }
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
  container: {
    borderRadius: 4,
    borderColor: '#3a66a0',
    borderWidth: 0.5
  }
})