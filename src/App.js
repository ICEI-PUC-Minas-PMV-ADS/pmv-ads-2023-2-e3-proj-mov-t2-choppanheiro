import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './view/home';
import Login from './view/login';
import Cadastro from './view/cadastro';
import Recuperar from './view/recuperar';
import Principal from './view/principal';
import Mesa from './view/mesa';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Recuperar" component={Recuperar} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Mesa" component={Mesa} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};



