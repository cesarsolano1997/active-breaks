import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stacks from '../global/stacks';
import LoginScreen from './screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

const settings = {
    headerShown: false,
    animationEnabled: true,
    animationTypeForReplace: 'pop'  
  }

export default function Core() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name={Stacks.OnBoarding} 
        component={OnboardingScreen}
        options={settings}      
      />
      <Stack.Screen 
          name={Stacks.Login} 
        component={LoginScreen}
        options={settings}      
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}