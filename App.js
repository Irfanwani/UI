import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Home from './screens/home'
import Create from './screens/create'
import Details from './screens/details'
import Edit from './screens/edit'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

const HomeStyles = {
  title: 'Article List',
  headerTintColor: 'lightgrey',
  headerStyle: {
    backgroundColor: 'teal'
  }

}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} 
          options = {HomeStyles}
        />
        <Stack.Screen name = 'Create' component={Create} 
          options = {{...HomeStyles, title: 'Create New'}}
        />
        <Stack.Screen name = 'Details' component={Details} 
          options = {{...HomeStyles, title: 'Details'}}
        />
        <Stack.Screen name = 'Edit' component={Edit} 
          options = {{...HomeStyles, title: 'Edit'}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight

  },
});
