import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render(){
    return(
      <View>
        <Text>Test settings page</Text>
      </View>
    );
    
  }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
