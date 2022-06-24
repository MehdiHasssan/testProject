
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import ResturantDetail from '../screens/ResturantDetail';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../Redux/store'
import OrderCompleted from '../screens/OrderCompleted';

const store = configureStore()

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <ReduxProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen options={{headerShown: false} }name="Home" component={Home} />
        <Stack.Screen  name = "resturantDetail" component={ ResturantDetail } />
        <Stack.Screen  name = "OrderCompleted" component={ OrderCompleted } />
      </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
}

export default RootNavigation;
