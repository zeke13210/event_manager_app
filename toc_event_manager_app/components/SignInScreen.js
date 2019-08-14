import React from 'react';
import { Button } from 'react-native-elements';
import { View, Alert, AsyncStorage } from 'react-native';
import GenerateForm from 'react-native-form-builder';

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

  /*componentDidMount() {
    //start listener and upon firebase login store token in storage
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      if (user) {
       
        const token = user.email
        const storeToken = AsyncStorage.setItem('TOKEN', token) //set token in storage
        console.log("the token is ", token)
      } else {
        console.log("Invalid login ")
      }
    })

  } */



  /*componentWillMount() {
    if (this.unsubscriber) {
      this.unsubscriber(); //stop listener
    }
  } */

  signInUser = () => {
    console.log("This is the state: ", this.state)
    this.props.navigation.navigate('Main')

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
      <View>
        <GenerateForm
          ref={(c) => {
            this.formGenerator = c;
          }}
          fields={fields}
          customValidation={this.validateForm}
        />
        <Button
          title="Sign In"
          onPress={this.signInUser} />

        <Button
          title="Sign Up"
          onPress={this.registerHandle} />
      </View>
    );
  }
}

export default SignInScreen