import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text } from 'react-native';

 class ViewEventsScreen extends React.Component {
  
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test View event screen page</Text>
      </View>
    );
    
  }
}

export default ViewEventsScreen