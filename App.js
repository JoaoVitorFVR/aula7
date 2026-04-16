import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BuscaPokemon from './componentes/BuscaPokemon';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer> 
        <Drawer.Navigator>
          <Drawer.Screen name="Opção I">
            {(props) => <BuscaPokemon {...props} detalhado={true} />}
          </Drawer.Screen>

          <Drawer.Screen name="Opção II">
            {(props) => <BuscaPokemon {...props} detalhado={false} />}
          </Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}