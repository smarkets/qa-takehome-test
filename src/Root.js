import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signupscreen from './screens/SignupScreen';
import SuccessScreen from './screens/SuccessScreen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white',
          }
        }}
      >
        <Stack.Screen
          name="Sign Up"
          component={Signupscreen}
        >
        </Stack.Screen>
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
