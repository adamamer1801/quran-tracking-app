import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/components/Navigation';
import { launch } from './src/utils/Launch/RegularLaunch/Launch';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { QuranView } from './src/components/Quran/QuranView';
import { QuranViewPortion } from './src/components/Quran/QuranViewPortion';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Navigation} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Quran Viewer" component={QuranView} options={{
          headerShown: true
        }} />
        <Stack.Screen name="Partial Verse Viewer" component={QuranViewPortion} options={{
          headerShown: true
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});