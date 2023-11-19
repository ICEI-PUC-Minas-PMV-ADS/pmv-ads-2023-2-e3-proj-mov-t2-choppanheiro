import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./view/home";
import Login from "./view/login";
import Cadastro from "./view/cadastro";
import Recuperar from "./view/recuperar";
import Principal from "./view/principal";
import Mesa from "./view/mesa";
import MinhaConta from "./view/account";
import Pedido from "./view/pedidos";
import Historico from "./view/historico";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Recuperar"
          component={Recuperar}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Pedido"
          component={Pedido}
          options={{
            header: () => null,
          }}
        />
        
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Mesa"
          component={Mesa}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="MinhaConta"
          component={MinhaConta}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Historico"
          component={Historico}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
