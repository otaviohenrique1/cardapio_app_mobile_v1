import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { StackRoutes } from './src/pages/routes';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
