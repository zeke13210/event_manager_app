import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements'
import GenerateForm from 'react-native-form-builder';
import db from '../firebase/firebaseConfig'
import firebase from 'firebase';

const fields = [

  {
    type: 'email',
    name: 'email',
    required: true,
    icon: 'ios-mail',
    label: 'email',
  },
  {
    type: 'text',
    name: 'password',
    icon: 'ios-create',
    label: 'password',
  }
];
class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      role: 'user',
      active: false
    }
  }

  registerUser = () => {
   /* const formValues = this.formGenerator.getValues();
    let email= this.state.email;
    let password= this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password) */
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(err => {
        console.log("Error creating account: ", err);
    })
    console.log("This is the registered state: ", this.state)
    db.collection('users').doc(this.state.email).set(this.state)
    this.formGenerator.resetForm();
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
          title="register"
          onPress={this.registerUser} />

      </View>
    );
  }
}

export default RegisterScreen