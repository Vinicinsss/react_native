import React from 'react';
import { View, Text } from 'react-native';
// Importando os estilos do arquivo separado
import { welcomeStyles } from '../styles/welcomeStyles'; 

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.title}>Bem-vindo ao aplicativo.</Text>
      <Text style={welcomeStyles.subtitle}>
        Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
      </Text>
    </View>
  );
}