import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import WelcomeScreen from './src/screens/WelcomeScreen';
import ModalsTabNavigator from './src/navigation/ModalsTabNavigator';
import ListsTabNavigator from './src/navigation/ListsTabNavigator'; 

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        
        <Drawer.Screen 
          name="Inicio" 
          component={WelcomeScreen} 
          options={{ title: 'Página Inicial' }} 
        />
        <Drawer.Screen 
          name="AreaModais" 
          component={ModalsTabNavigator} 
          options={{ title: 'Navegação de Modais' }} 
        />

        <Drawer.Screen 
          name="AreaListas" 
          component={ListsTabNavigator} 
          options={{ title: 'Listas com Rolagem' }} 
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}