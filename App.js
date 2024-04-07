import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import MainTabNavigator from './navigation/MainTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalStateProvider } from './context/GlobalStateContext';



const Stack = createStackNavigator();

const AppContent = () => {
  const { authState } = useAuth();


  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    {authState?.authenticated ? (
      <Stack.Screen name="MenuBar" component={MainTabNavigator} />
    ) : (
      <Stack.Screen name="Login" component={LoginScreen} />
    )}
  </Stack.Navigator>
  </NavigationContainer>
  );
};


export default function App() {
  return (
    <GlobalStateProvider>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
    </GlobalStateProvider>
  );
}
