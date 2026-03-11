import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens you created
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}