import SignInScreen from '../components/SignInScreen';
import RegisterScreen from '../components/RegisterScreen';
import { createStackNavigator } from 'react-navigation';

const AuthStack = createStackNavigator(
    /*
    User access's stack if not signed in
    Available screens in stack:
    1. SignIn screen -initializes first
    2. Register screen
  */
    {
      SignIn: {
        screen: SignInScreen,
        navigationOptions: () => ({
          title: 'SignIn'
        })
      },
      Register: {
        screen: RegisterScreen,
        navigationOptions: () => ({
          title: 'Register'
        })
      }
    },
    {
      initialRouteName: 'SignIn'
    })

    export default AuthStack