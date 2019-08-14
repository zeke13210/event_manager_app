import React from 'react';
import { View, Text } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SettingsScreen extends React.Component {
  
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test settings page</Text>
        <Ionicons name='ios-add' size={20} color='#72e086' />
      </View>
    );
    
  }
}
export default SettingsScreen

