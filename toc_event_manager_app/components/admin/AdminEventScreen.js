import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text } from 'react-native';

 class AdminEventScreen extends React.Component {
  
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Admin View event screen page</Text>
      </View>
    );
    
  }
}

export default AdminEventScreen