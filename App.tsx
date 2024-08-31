import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>Home Screen</Text>
    </View>
  );
}

const SettingsScreen = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>Settings Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} key={1}/>
        <Tab.Screen name="Settings" component={SettingsScreen} key={2} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },

  defaultFont: {
    fontSize: 18,
    color: 'black',
    fontWeight: "bold"
  }
})
export default App;
