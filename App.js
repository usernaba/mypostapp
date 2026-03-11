import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';
import Detail from './screens/Detail';
import SettingsMenu from './screens/SettingsMenu';
import SettingsScreen from './screens/SettingsScreen';
import NotificationScreen from './screens/NotificationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ title: 'Create Account' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'User Login' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Dashboard', headerLeft: null }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={{ title: 'Item Details' }} 
        />
        <Stack.Screen 
          name="SettingsMenu" 
          component={SettingsMenu} 
        />
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen} 
        />
        <Stack.Screen 
          name="NotificationScreen" 
          component={NotificationScreen} 
          options={{ title: 'Notification Setup' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}