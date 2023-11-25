import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home/home';
import Login from '../Choppanheiro/Screens/Login/login'
import CadastroUsuarios from './Screens/CadastroUsuarios/cadastroUsuarios';
import TelaPosLogin from './Screens/TelaPosLogin/telaPosLogin';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuarios" component={CadastroUsuarios} />
        <Stack.Screen name="TelaPosLogin" component={TelaPosLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}