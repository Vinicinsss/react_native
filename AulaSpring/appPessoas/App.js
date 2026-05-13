import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

// Telas de Pessoas
import PessoaListScreen from './src/screens/PessoaListScreen'
import PessoaFormScreen from './src/screens/PessoaFormScreen'
import PessoaDetailScreen from './src/screens/PessoaDetailScreen'

// Telas de Produtos
import ProdutoListScreen from './src/screens/ProdutoListScreen'
import ProdutoFormScreen from './src/screens/ProdutoFormScreen'
import ProdutoDetailScreen from './src/screens/ProdutoDetailScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

// Stack para Pessoas
function PessoaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: '#2563eb', headerShadowVisible: false }}>
      {/* Escondemos o cabeçalho da Stack na lista para usar apenas o cabeçalho da Gaveta */}
      <Stack.Screen name="PessoaList" component={PessoaListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PessoaDetail" component={PessoaDetailScreen} options={{ title: 'Detalhes' }} />
      <Stack.Screen 
        name="PessoaForm" 
        component={PessoaFormScreen} 
        options={({ route }) => ({ title: route.params?.id ? 'Editar Pessoa' : 'Nova Pessoa' })}
      />
    </Stack.Navigator>
  )
}

// Stack para Produtos
function ProdutoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: '#2563eb', headerShadowVisible: false }}>
      {/* Escondemos o cabeçalho da Stack na lista para usar apenas o cabeçalho da Gaveta */}
      <Stack.Screen name="ProdutoList" component={ProdutoListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProdutoDetail" component={ProdutoDetailScreen} options={{ title: 'Detalhes do Produto' }} />
      <Stack.Screen name="ProdutoForm" component={ProdutoFormScreen} options={{ title: 'Formulário de Produto' }} />
    </Stack.Navigator>
  )
}

// Navegação Principal (A Gaveta)
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#ffffff' },
            headerTitleStyle: { fontWeight: '700', fontSize: 18, color: '#0f172a' },
            headerTintColor: '#2563eb',
            drawerActiveTintColor: '#2563eb',
          }}
        >
          <Drawer.Screen 
            name="Pessoas" 
            component={PessoaStack} 
            options={{ 
              title: 'Gestão de Pessoas',
              drawerIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />
            }} 
          />
          <Drawer.Screen 
            name="Produtos" 
            component={ProdutoStack} 
            options={{ 
              title: 'Gestão de Produtos',
              drawerIcon: ({ color, size }) => <Ionicons name="cube-outline" size={size} color={color} />
            }} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}