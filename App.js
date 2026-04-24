// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import { TelaGravar, TelaLer } from "./componentes/TelasFirebase";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ drawerActiveTintColor: '#2196F3' }}>
        <Drawer.Screen name="Gravar Dados" component={TelaGravar} />
        <Drawer.Screen name="Ler Dados" component={TelaLer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}